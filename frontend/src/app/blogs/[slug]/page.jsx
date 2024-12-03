import client from "@/client/client";
import { getAllBlogs } from "@/queries/getAllBlogs";
import { getSingleBlog } from "@/queries/getSingleBlog";
import React from "react";

const page = async ({ params }) => {
  const allBlogs = await client.query({ query: getAllBlogs });
  const blog = allBlogs.data.blogs.find((blog) => blog.slug === params.slug);
  if (!blog) {
    return null;
  }
  const { data } = await client.query({
    query: getSingleBlog,
    variables: {
      documentId: blog.documentId,
    },
  });
  //   const blogData = data?.filter((blog) => blog.slug === params.slug)[0];

  console.log("blogData", allBlogs);
  console.log("data", data);
  return <div>page</div>;
};

export default page;

export const generateStaticParams = async () => {
  const { data } = await client.query({ query: getAllBlogs });

  return data?.blogs.map((blog) => ({
    slug: blog.slug,
  }));
};
