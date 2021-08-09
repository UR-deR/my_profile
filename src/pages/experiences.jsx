import React from "react";
import classNames from "classnames";
import Layout from "../components/Layout";
import PageTitle from "../components/Page-title";
import Experience from "../components/Experience.jsx";
import experienceData from "../../content/experience-data.js";
import switchBodyHeight from "../../utils/body-height";

const ExperiencesPage = () => {
  switchBodyHeight("h-screen", "h-full");
  return (
    <Layout>
      <PageTitle title="EXPERIENCES" />
      <section className={classNames("text-gray-600", "body-font")}>
        <div className={classNames("container", "flex", "flex-wrap", "mx-auto", "mt-16", "px-5", "sm:py-8", "py-6")}>
          <div className={classNames("flex", "flex-wrap", "-m-4")}>
            {experienceData.map((data, index) => {
              return <Experience key={index} title={data.title} content={data.content} svg={data.svg} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExperiencesPage;
