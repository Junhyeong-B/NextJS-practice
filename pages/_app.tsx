import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

type AppProps = {
  Component: React.FC;
};

export default function App({ Component, ...Props }: AppProps) {
  return (
    <Layout>
      <Component {...Props} />
    </Layout>
  );
}
