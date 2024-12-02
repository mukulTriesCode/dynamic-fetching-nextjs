import client from "@/client/client";
import { getAllBlogs } from "@/queries/getAllBlogs";
import { getHeading } from "@/queries/getHeading";
import React from "react";

export const revalidate = 10;

const Page = async () => {
  const { data, error, loading } = await client.query({
    query: getAllBlogs,
    fetchPolicy: "no-cache",
  });
  console.log('data', data)
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
      <h1 className="text-6xl font-bold text-center my-12">
        {/* {data?.heading?.Title} */}
      </h1>
      <div className="w-2/3 mx-auto rounded-lg bg-purple-300 aspect-[5/2]"></div>
    </main>
  );
};

export default Page;

// export const generateStaticParams = async () => {
//   const { data } = await client.query({ query: getAllBlogs });
//   const blogs = data?.blogs.map((blog) => ({
//     slug: blog.slug,
//   }));
//   return {
//     params: blogs,
//   };
// };
