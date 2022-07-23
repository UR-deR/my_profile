import React from "react";
import classNames from "classnames";
import Header from "./Header";
import CoverBg from "../images/cover-bg.jpg";
import { useLocation } from "@reach/router"


const Layout = ({ children }) => {
  const isHomePage = useLocation().pathname === "/";
  
  return (
    <div className={classNames("flex", "flex-col", "mx-auto", "w-full", "h-full")} style={{
      backgroundImage: `url(${CoverBg})`,
    }}>
      <Header />
      <main className={classNames(isHomePage ? "h-screen" : "h-full")}>{children}</main>
    </div>
  );
};

export default Layout;
