import client from "@/client/client";
import { getHeading } from "@/queries/getHeading";
import React from "react";

export const revalidate = 10;

const Blogs = async () => {
  const { data, error, loading } = await client.query({
    query: getHeading,
    fetchPolicy: "no-cache",
  });
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("http://localhost:1337/graphql", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             query: `
  //                 query Heading {
  //                   heading {
  //                     Title
  //                   }
  //                 }
  //                 `,
  //           }),
  //           //   next: { revalidate: 10 },
  //         });
  //         const blogs = await response.json();
  //         setData(blogs?.data);
  //       } catch (error) {
  //         console.error("Error fetching blogs", error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="container">
      <h1 className="text-6xl font-bold text-center">{data?.heading?.Title}</h1>
    </main>
  );
};

export default Blogs;
