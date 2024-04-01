import { IllustPassionate, IllustResourceful, IllustFriendly } from '@/images/index';
import Image from 'next/image';
import styles from '@/styles/home/feature.module.scss';
import clsx from 'clsx';

const featureContents = [
  {
    title: 'passionate',
    image: IllustPassionate,
    text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
  },
  {
    title: 'resourceful',
    image: IllustResourceful,
    text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
  },
  {
    title: 'friendly',
    image: IllustFriendly,
    text: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
  },
];

const Feature = () => {
  return (
    <section className={styles.feature}>
      <ul className={styles.list}>
        {featureContents.map((content) => (
          <li key={content.title} className={styles.item}>
            <div className={clsx(styles.image, styles[content.title])}>
              <Image src={content.image} width={202} height={202} alt={content.title} />
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>{content.title}</h3>
              <p className={styles.description}>{content.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Feature;
