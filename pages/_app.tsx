import React from "react";
import NavBar from "../components/NavBar";

type AppProps = {
  Component: React.FC;
};

export default function App({ Component, ...Props }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...Props} />
      <style jsx global>{`
        a {
          color: salmon;
        }
      `}</style>
    </>
  );
}
