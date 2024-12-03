"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function BlockRenderer({ content }) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="">{children}</p>
        ),
        link: ({ children, url }) => (
          <Link className="text-red-400 hover:underline" href={url}>
            {children}
          </Link>
        ),
        image: ({ children, data: { url } }) => (
          <img src={url} alt={children} />
        ),
        list: ({ children, data: { items } }) => (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ),
        quote: ({ children, data: { author } }) => (
          <blockquote>
            <p>{children}</p>
            <footer>{author}</footer>
          </blockquote>
        ),
      }}
    />
  );
}
