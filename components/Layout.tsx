import { HTMLAttributes } from "react";
import NavBar from "./NavBar";

export default function Layout({
  children,
}: HTMLAttributes<HTMLElement>): JSX.Element {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
