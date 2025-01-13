import Navbar from "@/components/custom/navbar";
import { getClient } from "@/lib/api";
import { gql } from "@apollo/client";
import Display from "./workDisplay";

export default async function Work() {

    const query = gql`
        query GetPosts($host: String!) {
            publication(host: $host) {
                posts(first:0){
                    edges {
                              node {
                                id
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
    `;
    
    const variables = {
        host: "me.techsaumya.in",
    };

    let posts = null;
    
        try {
            const { data } = await getClient().query({ query, variables });
            posts = data.publication.posts.edges;
        } catch (error) {
            console.error("Error fetching data:", error);
            return (
                <>
                    <Navbar />
                    <div className="pt-[15vh] px-[20vw] mb-20 text-red-600 font-saumyaSans">
                        Error fetching data. Please try again later.
                    </div>
                </>
            );
        }

    
    return (
        <Display data={posts}/>
    )
    
}