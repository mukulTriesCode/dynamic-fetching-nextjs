"use client";
import { getHeading } from "@/queries/getHeading";
import { useQuery } from "@apollo/client";
import React from "react";

const Heading = () => {
  const { data, loading, error } = useQuery(getHeading);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return <div>{data.heading.Title}</div>;
};

export default Heading;
