import React from 'react';
import classNames from 'classnames';

const PageTitle = (props) => (
  <section className={classNames('h-full')}>
    <div className={classNames('flex', 'justify-center', 'h-1/6', 'pt-36')}>
      <div className={classNames('flex', 'justify-center')}>
        <h1 className={classNames('tracking-widest', 'font-bold', 'sm:text-5xl', 'text-3xl', 'text-black', 'text-center', 'font-sans')}>{props.title}</h1>
      </div>
    </div>
  </section>
);

export default PageTitle;
