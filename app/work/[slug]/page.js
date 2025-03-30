export const dynamic = "force-dynamic";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/custom/navbar";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/api";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug }=await params;

  const query = gql`
      query GetPost($host: String!, $slug: String!) {
          publication(host: $host) {
              post(slug: $slug) {
                  title
              }
          }
      }
  `;

  const variables = {
      host: "me.techsaumya.in",
      slug: slug,
  };

  const client = getClient();
  let post = null;

  try {
      const result = await client.query({
          query,
          variables,
          fetchPolicy: "network-only",
          nextFetchPolicy: "network-only"
      });

      const { data } = result;
      post = data.publication.post;
  } catch (error) {
      console.error("Error fetching metadata:", error);
      return { title: "Error - Unable to load metadata" };  // Fallback title
  }

  return {
      title: post.title + " | Saumya Talwani",
  };
}

const CustomLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

const CustomImage = (props) => (
  <Image 
    src={props.src} 
    alt={props.alt || "Image"} 
    width={800} 
    height={500} 
    style={{ width: "auto", height: "auto" }}
    className="rounded-lg shadow-lg my-10"
  />
  
);

async function getData(slug) {
  const query = gql`
    query GetPost($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          title
          subtitle
          content {
            markdown
          }
        }
      }
    }
  `;

  const variables = { host: "me.techsaumya.in", slug: slug };

  try {
    const client = getClient();
    const result = await client.query({ query, variables, fetchPolicy: "network-only",context: { fetchOptions: { cache: "no-store" } }, });
    return result.data.publication.post;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function Page({ params }) {
  const {slug}=await params;
  const post = await getData(slug);
  if (!post) {
    return (
      <>
        <Navbar />
        <div className="pt-[15vh] px-[20vw] mb-20 text-red-600 font-saumyaSans">
          Error fetching post data. Please try again later.
        </div>
      </>
    );
  }
  

  const props = post.subtitle.split(",");
  const cleanedMarkdown = post.content.markdown
    .replace(/\s*align="(center|left|right)"/g, '')
    .replace(/<p>\s*<div/g, "<p><span")
    .replace(/<\/div>\s*<\/p>/g, "</span></p>")
    .replace(/\n/g, "<br/>");

  return (
    <>
      <Navbar />
      <div className="pt-[10vh] md:pt-[15vh] px-[10vw] md:px-[20vw] mb-20">
        <h1 className="text-6xl md:text-8xl font-saumyaSans font-medium mb-20">{post.title}</h1>
        <div className="flex">
          <table className="workPage">
            <thead>
              <tr><th className="min-w-[10vw]">Location</th></tr>
            </thead>
            <tbody><tr><td>{props[0]}</td></tr></tbody>
          </table>
          <table className="workPage">
            <thead>
              <tr><th className="min-w-[20vw]">Service</th></tr>
            </thead>
            <tbody><tr><td>{props[1] || "Design & Development"}</td></tr></tbody>
          </table>
          <table className="workPage">
            <thead>
              <tr><th className="min-w-[10vw]">Year</th></tr>
            </thead>
            <tbody><tr><td>{props[2]}</td></tr></tbody>
          </table>
        </div>
        <div className="myContent mt-10 font-noto font-light text-justify">
          <MDXRemote source={cleanedMarkdown} components={{ img: CustomImage, a:CustomLink }}/>
        </div>
      </div>
    </>
  );
}