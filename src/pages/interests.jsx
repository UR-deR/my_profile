import React from 'react';
import classNames from 'classnames';
import { Layout } from '../components/Layout';
import { Interest } from '../components/Interest';
import { interests } from '../../content/interests';

const InterestsPage = () => {
  return (
    <Layout title='INTERESTS'>
      <section className={classNames('text-gray-600', 'body-font')}>
        <div className={classNames('container', 'flex', 'flex-wrap', 'mx-auto', 'px-5', 'sm:py-24', 'py-12')}>
          {interests.map((interest, index) => (
            <Interest key={index} index={index} title={interest.title} content={interest.content} svg={interest.svg} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default InterestsPage;
