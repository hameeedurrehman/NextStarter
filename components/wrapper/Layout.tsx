"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export const withLayout = ["/"]; // define the routes that will have the layout (Header, Footer, etc)

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  // get the formatted title of the page
  const title = pathname
    .substring(1)
    .replaceAll("-", " ")
    .toUpperCase();

  return (
    <>
      {withLayout.includes(pathname) ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Layout;
