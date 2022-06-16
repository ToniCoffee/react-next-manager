import { ReactNode } from "react";
import Head from 'next/head';
import Header from '../header';
import style from './style.module.css';

interface Children {
  children: ReactNode
};

interface Props extends Children {
  title: string
}

const Layout = ({ title = 'Title', children }: Props): JSX.Element => {
  return (
    <div className={style.layout}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title="J&JDist" />
      <main>{children}</main>
    </div>
  );
}

export default Layout