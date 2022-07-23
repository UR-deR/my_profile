import React from 'react';
import classNames from 'classnames';

export const Experience = (props) => (
  <div className={classNames('lg:h-96', 'xl:w-1/3', 'md:w-1/2', 'p-4')}>
    <div className={classNames('flex', 'flex-col', 'h-full', 'p-6', 'border', 'border-gray-300', 'rounded-lg')}>
      <div className={classNames('inline-flex', 'items-center', 'justify-center', 'w-16', 'h-16', 'mx-auto', 'mb-4', 'rounded-full', 'bg-indigo-100', 'text-indigo-500')}>{props.svg}</div>
      <h2 className={classNames('mb-2', 'text-center', 'text-lg', 'text-gray-900', 'font-medium')}>{props.title}</h2>
      <p className={classNames('leading-relaxed', 'text-base')}>{props.content}</p>
    </div>
  </div>
);
