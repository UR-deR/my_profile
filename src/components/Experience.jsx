import React from "react";
import classNames from "classnames";

const Experience = (props) => {
  const { title, content, svg } = props;
  return (
    <div className={classNames("lg:h-96", "xl:w-1/3", "md:w-1/2", "p-4")}>
      <div className={classNames("flex", "flex-col", "h-full", "p-6", "border", "border-gray-300", "rounded-lg")}>
        <div className={classNames("inline-flex", "items-center", "justify-center", "w-16", "h-16", "mx-auto", "mb-4", "rounded-full", "bg-indigo-100", "text-indigo-500")}>{svg}</div>
        <h2 className={classNames("mb-2", "text-center", "text-lg", "text-gray-900", "font-medium")}>{title}</h2>
        <p className={classNames("leading-relaxed", "text-base")}>{content}</p>
      </div>
    </div>
  );
};

export default Experience;
