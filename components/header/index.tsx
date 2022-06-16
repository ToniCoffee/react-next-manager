import Image from 'next/image';
import Link from 'next/link';

import style from './style.module.css';

export default function Header({ title = 'Title' }) {
  return (
    <header className={style.header}>
      <Link href="/">
        <a>
          <Image src="/github.svg" width={40} height={40} alt="github img" />
        </a>
      </Link>
      <h1 className={style.title}>{title}</h1>
      <div className={style.menu}>
        <div></div>
      </div>
    </header>
  );
}
