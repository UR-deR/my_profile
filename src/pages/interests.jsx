import React from 'react';
import classNames from 'classnames';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import Interest from '../components/Interest';
import interestData from '../../content/interests';

const InterestsPage = () => {
  const dataLength = interestData.length - 1;
  return (
    <Layout>
      <PageTitle title='INTERESTS' />
      <section className={classNames('text-gray-600', 'body-font')}>
        <div className={classNames('container', 'flex', 'flex-wrap', 'mx-auto', 'px-5', 'sm:py-24', 'py-12')}>
          {interestData.map((data, index) => (
            <Interest key={index} index={index} title={data.title} content={data.content} svg={data.svg} dataLength={dataLength} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default InterestsPage;
