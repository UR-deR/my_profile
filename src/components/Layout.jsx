import React from 'react';
import classNames from 'classnames';
import CoverBg from '../images/cover-bg.jpg';
import { Header } from './Header';
import { useLocation } from '@reach/router';
import { PageTitle } from './PageTitle';

export const Layout = (props) => {
  const isHomePage = useLocation().pathname === '/';

  return (
    <div
      className={classNames('flex', 'flex-col', 'mx-auto', 'w-full', 'h-full')}
      style={{
        backgroundImage: `url(${CoverBg})`,
      }}
    >
      <Header />
      <main className={classNames(isHomePage ? 'h-screen' : 'h-full')}>
        {isHomePage ? null : <PageTitle title={props.title} />}
        {props.children}
      </main>
    </div>
  );
};
