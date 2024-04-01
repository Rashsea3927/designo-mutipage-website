import styles from '@/styles/footer.module.scss';
import Button from './Button';

const Footer = () => {
  return (
    <footer>
      <div className={styles['get-in-touch']}>
        <h3 className={styles.heading}>Let’s talk about your project</h3>
        <p className={styles.description}>
          Ready to take it to the next level? Contact us today and find out how our expertise can help your business
          grow.
        </p>
        <Button text='Get in touch' />
      </div>
    </footer>
  );
};

export default Footer;
