import React from "react";
import classNames from "classnames";

const Interest = (props) => {
  const { index, title, content, svg, dataLength } = props;
  return (
    <div className={classNames(index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse", index === dataLength ? "border-transparent" : "border-b", "flex", " flex-col", " items-center", "border-gray-400", " lg:w-2/3", "	 mx-auto", " pb-10 ", "mb-10")}>
      <div className={classNames("sm:mr-10", " inline-flex", " items-center", " justify-center", " flex-shrink-0", " w-32", " h-32", " rounded-full", " bg-indigo-100", " text-indigo-500")}>{svg}</div>
      <div className={classNames("sm:mr-10 flex-grow sm:text-left mt-6 sm:mt-0")}>
        <h2 className={classNames("mb-2 ", "text-center", " text-gray-900 ", "text-lg", " font-medium")}>{title}</h2>
        <p className={classNames("leading-relaxed", "text-base")}>　{content}</p>
      </div>
    </div>
  );
};

export default Interest;
