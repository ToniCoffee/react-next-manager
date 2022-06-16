import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import style from '/styles/home.module.css';

const HomePage: NextPage = () => {
  return (
    <>
      {/* <main className={styles.main}> */}
        <section className={style.section}>
          <Link href="/clients">
            <a>Clientes</a>
          </Link>
          <Link href="/products">
            <a>Productos</a>
          </Link>
          <Link href="/clients">
            <a>Facturación</a>
          </Link>
        </section>
      {/* </main> */}
    </>
  );
}

export default HomePage;