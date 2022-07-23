import React from 'react';
import classNames from 'classnames';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import Experience from '../components/Experience.jsx';
import experienceData from '../../content/experience-data.js';

const ExperiencesPage = () => (
  <Layout>
    <PageTitle title='EXPERIENCES' />
    <section className={classNames('text-gray-600', 'body-font')}>
      <div className={classNames('container', 'flex', 'flex-wrap', 'mx-auto', 'mt-16', 'px-5', 'sm:py-8', 'py-6')}>
        <div className={classNames('flex', 'flex-wrap', '-m-4')}>
          {experienceData.map((data) => (
            <Experience key={data.title} title={data.title} content={data.content} svg={data.svg} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ExperiencesPage;
