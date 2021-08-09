import React from "react";
import classNames from "classnames";
import Layout from "../components/Layout";
import PageTitle from "../components/Page-title";
import Interest from "../components/Interest";
import interestData from "../../content/interest-data";
import switchBodyHeight from "../../utils/body-height";

const InterestsPage = () => {
  switchBodyHeight("h-screen", "h-full");

  const dataLength = interestData.length - 1;
  return (
    <Layout>
      <PageTitle title="INTERESTS" />
      <section className={classNames("text-gray-600", "body-font")}>
        <div className={classNames("container", "flex", "flex-wrap", "mx-auto", "px-5", "sm:py-24", "py-12")}>
          {interestData.map((data, index) => {
            return <Interest key={index} index={index} title={data.title} content={data.content} svg={data.svg} dataLength={dataLength} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default InterestsPage;
