import Link from 'next/link';
import styles from '@/styles/button.module.scss';

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <Link className={styles.button} href='/'>
      {text}
    </Link>
  );
};

export default Button;
