import React from 'react';
import classNames from 'classnames';
import { Layout } from '../components/Layout.jsx';

const IndexPage = () => (
  <Layout>
    <section className={classNames('h-full')}>
      <div className={classNames('grid', 'justify-center', 'place-items-center', 'h-1/2', 'p-4')}>
        <div className={classNames('flex', 'flex-col', 'justify-center', 'sm:pt-40', 'pt-20')}>
          <h1 className={classNames('break-normal', 'font-bold', 'text-5xl', 'text-center', 'tracking-widest', 'font-sans', 'text-black')}>SHOTA FURUNO</h1>
          <small className={classNames('mt-2', 'break-normal', 'text-center', 'text-gray-500')}>New Grad Software Engineer</small>
        </div>
      </div>
      <div className={classNames('container', 'm-auto', 'h-1/2')}>
        <div className={classNames('p-4')}>
          <p className={classNames('md:text-center', 'text-left', 'leading-7')}>
            岐阜県多治見市育ち、千葉県在住の新卒ソフトウェアエンジニア。
            <br />
            <a className={classNames('link')} href="https://www.claves.co.jp/" target="_blank" rel="noreferrer">
              株式会社クラベス
            </a>
            でフロントエンド開発を主に担当しています。
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
