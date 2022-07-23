import React from "react";
import classNames from "classnames";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import LifeEvent from "../components/LifeEvent";
import lifeEventData from "../../content/life-event-data";

const AboutPage = () => {
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
