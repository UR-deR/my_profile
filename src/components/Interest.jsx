import React from 'react';
import classNames from 'classnames';
import { interests } from '../../content/interests';

export const Interest = (props) => (
  <div className={classNames(props.index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse', props.index === interests.length - 1 ? 'border-transparent' : 'border-b', 'flex', ' flex-col', ' items-center', 'border-gray-400', ' lg:w-2/3', '	 mx-auto', ' pb-10 ', 'mb-10')}>
    <div className={classNames('sm:mr-10', ' inline-flex', ' items-center', ' justify-center', ' flex-shrink-0', ' w-32', ' h-32', ' rounded-full', ' bg-indigo-100', ' text-indigo-500')}>{props.svg}</div>
    <div className={classNames('sm:mr-10 flex-grow sm:text-left mt-6 sm:mt-0')}>
      <h2 className={classNames('mb-2 ', 'text-center', ' text-gray-900 ', 'text-lg', ' font-medium')}>{props.title}</h2>
      <p className={classNames('leading-relaxed', 'text-base')}>{props.content}</p>
    </div>
  </div>
);
