"use client";
import client from "@/client/client";
import { ApolloProvider } from "@apollo/client";
import React from "react";

const Provider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
