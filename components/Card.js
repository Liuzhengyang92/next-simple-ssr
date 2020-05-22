import React from 'react';
import Link from 'next/link';
import styles from './Card.module.css';

const Card = React.forwardRef(({ id, name, email }, ref) => {
  return (
    <Link href={{ pathname: `robots/${id}`, query:{ name, email } }}>
      <div ref={ref} className={styles.card}>
        <img src={`https://robohash.org/${id}?size=200x200`} alt='robots' />
        <div>
          <a ref={ref}>{name}</a>
          <p>{email}</p>
        </div>
      </div>
    </Link>
  );
});

export default Card;
