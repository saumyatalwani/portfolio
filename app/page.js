import HomeUI from "./home";
import { getClient } from "@/lib/api";
import { gql } from "@apollo/client";
import Navbar from "@/components/custom/navbar";

export default async function Home() {
  
  const query = gql`
        query GetHome($host: String!, $slug: String!) {
            publication(host: $host) {
              series(slug: $slug){
                posts(first:3){
                  edges{
                    node{
                      title
                      subtitle
                      coverImage{
                        url
                      }
                      slug
                    }
                  }
                }
              }
            }
        }
    `;
  
  const variables = {
    host: "me.techsaumya.in",
    slug: "home",
  };

  let posts = null;

   try {
      const { data } = await getClient().query({ query, variables });
      posts = data.publication.series.posts.edges
    } catch (error) {
        console.error("Error fetching data:", error);
        return (
          <>
            <Navbar />
            <div className="pt-[15vh] px-[20vw] mb-20 text-red-600 font-saumyaSans">
              Error fetching post data. Please try again later.
            </div>
          </>
        );
    }


  return <HomeUI data={posts}/>
}
