import Feature from '@/components/home/Feature';
import MainVisual from '@/components/home/MainVisual';
import Services from '@/components/home/Services';
import styles from '@/styles/home/page.module.scss';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <MainVisual />
      <Services />
      <Feature />
    </main>
  );
};

export default HomePage;
