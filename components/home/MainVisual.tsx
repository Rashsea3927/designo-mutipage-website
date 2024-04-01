import styles from '@/styles/home/mainvisual.module.scss';
import Image from 'next/image';
import HeroImage from '@/assets/desktop/image.png';
import Button from '../Button';

const MainVisual = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Award-winning custom designs and digital branding solutions</h2>
          <p className={styles.paragraph}>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        </div>
        <Button text='Learn More' />
      </div>
      <div className={styles.hero} />
    </section>
  );
};

export default MainVisual;
