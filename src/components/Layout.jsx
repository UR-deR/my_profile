import React from "react";
import classNames from "classnames";
import Header from "./Header";
import CoverBg from "../images/cover-bg.jpg";

const Layout = ({ children }) => {
  const coverBg = {
    backgroundImage: `url(${CoverBg})`,
  };

  return (
    <div className={classNames("flex", "flex-col", "mx-auto", "w-full", "h-full")} style={coverBg}>
      <Header />
      <main className={classNames("h-full")}>{children}</main>
      {/* <main className={classNames("h-[90%]")}>{children}</main> */}
    </div>
  );
};

export default Layout;
