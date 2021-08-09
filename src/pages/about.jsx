import React from "react";
import classNames from "classnames";
import Layout from "../components/Layout";
import PageTitle from "../components/Page-title";
import LifeEvent from "../components/Life-event";
import lifeEventData from "../../content/life-event-data";
import switchBodyHeight from "../../utils/body-height";

const AboutPage = () => {
  switchBodyHeight("h-screen", "h-full");
  return (
    <Layout>
      <PageTitle title="ABOUT ME" />
      <section className={classNames("text-gray-600", "body-font")}>
        <div className={classNames("container", "flex", "flex-wrap", "mx-auto", " px-5", "sm:py-24", "py-12")}>
          {lifeEventData.map((data, index) => {
            return <LifeEvent key={index} title={data.title} content={data.content} age={data.age} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
