import client from "@/client/client";
import BlockRenderer from "@/components/BlockRenderer";
import { getAllBlogs } from "@/queries/getAllBlogs";
import { getSingleBlog } from "@/queries/getSingleBlog";
import { redirect } from "next/navigation";
import React from "react";
export const revalidate = 60;

const page = async ({ params }) => {
  const allBlogs = await client.query({
    query: getAllBlogs,
    fetchPolicy: "no-cache",
  });
  const { slug } = await params;
  const singleBlog = allBlogs.data.blogs.find(
    (blog) => blog.slug === slug
  );
  if (!singleBlog) {
    redirect("/404");
  }
  const { data } = await client.query({
    query: getSingleBlog,
    variables: {
      documentId: singleBlog.documentId,
    },
    fetchPolicy: "no-cache",
  });
  const blog = data?.blog;
  return (
    <div className="container">
      <h1>{blog?.blog_title}</h1>
      <div className="container max-w-[800px]">
        <BlockRenderer content={blog?.blog_description} />
      </div>
    </div>
  );
};

export default page;

export const generateStaticParams = async () => {
  const { data } = await client.query({
    query: getAllBlogs,
    fetchPolicy: "no-cache",
  });

  return data?.blogs.map((blog) => ({
    slug: blog.slug,
  }));
};
