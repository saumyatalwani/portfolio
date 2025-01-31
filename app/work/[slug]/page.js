import Navbar from "@/components/custom/navbar";
import { getClient } from "@/lib/api";
import { gql } from "@apollo/client";

export default async function Work({ params }) {
    const {slug}=await params;

    const query = gql`
        query GetPost($host: String!, $slug: String!) {
            publication(host: $host) {
                post(slug: $slug) {
                    title
                    subtitle
                    tags{
                        tagline
                      }
                    content {
                        html
                    }
                }
            }
        }
    `;

    const variables = {
        host: "me.techsaumya.in",
        slug: slug,
    };

    let post = null;
    let props = null;

    try {
        const client = getClient();
        const result = await client.query({
            query,
            variables,
            fetchPolicy: "network-only",
            nextFetchPolicy: "network-only"
          });
          console.log(getClient().cache.extract());

          const { data } = result; 

          console.log(data);
        post = data.publication.post;
        props = post.subtitle.split(",");
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

    return (
        <>
            <Navbar />
            <div className="pt-[10vh] md:pt-[15vh] px-[10vw] md:px-[20vw] mb-20">
                <h1 className="text-6xl md:text-8xl font-saumyaSans font-medium mb-20">{post.title}</h1>
                <div className="flex">
                    <table className="workPage">
                        <thead>
                            <tr>
                                <th className="min-w-[10vw]">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props[0]}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="workPage">
                        <thead>
                            <tr>
                                <th className="min-w-[20vw]">Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props[1] || "Design & Development"}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="workPage">
                        <thead>
                            <tr>
                                <th className="min-w-[10vw]">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props[2]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div dangerouslySetInnerHTML={{ __html: post.content.html}} className="mt-10 font-noto font-light text-justify">
                </div>
            </div>
        </>
    );
}
