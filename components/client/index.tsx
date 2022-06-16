import Image from 'next/image';
import Link from 'next/link';
import ClientInterface from 'interfaces/client';
import style from './style.module.css';

export default function Client({
  id,
  reference,
  socialName,
  name,
  direction,
  town,
  description,
  commonDelivery,
  wayToPay,
  opensAt
}: ClientInterface) {
  return (
    <div key={id} className={style.client}>
      <div className={style.imageContainer}>
        <Link href={`/clients/${id}`}>
          <a>
            {/* <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHl451ctUyNOkUova3z5I13P1SlsQWMU5oUw&usqp=CAU' alt='bar image' layout='fill' className={style.image} /> */}
            <Image src='/bar-image.jpg' alt='bar image' layout='fill' className={style.image} />
            <p>{name}</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
