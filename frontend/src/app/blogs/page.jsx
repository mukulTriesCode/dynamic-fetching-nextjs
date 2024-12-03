import client from "@/client/client";
import { getAllBlogs } from "@/queries/getAllBlogs";
import { getHeading } from "@/queries/getHeading";
import Link from "next/link";
import React from "react";

export const revalidate = 10;

const Page = async () => {
  const { data, error, loading } = await client.query({
    query: getAllBlogs,
    fetchPolicy: "no-cache",
  });
  console.log("data", data);
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
      <h1 className="text-6xl font-bold text-center my-12">Blogs</h1>
      <div className="flex">

      {data?.blogs.map((blog) => (
        <Link
        key={blog.documentId}
        href={`/blogs/${blog?.slug}`}
        className="rounded-lg aspect-[3/5] max-w-[200px] w-full bg-purple-300"
        >
          <div className="grid h-full place-items-center">
            <h2>{blog?.blog_title}</h2>
          </div>
        </Link>
      ))}
      </div>
    </main>
  );
};

export default Page;