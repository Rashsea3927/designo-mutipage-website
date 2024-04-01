import {
  MobileWebDesign,
  MobileAppDesign,
  MobileGraphicDesign,
  TabletWebDesign,
  TabletAppDesign,
  TabletGraphicDesign,
  DesktopWebDesign,
  DesktopAppDesign,
  DesktopGraphicDesign,
} from '@/images/index';

import styles from '@/styles/home/services.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

const servicesContents = [
  {
    name: 'web-design',
    image: { mobile: MobileWebDesign, tablet: TabletWebDesign, desktop: DesktopWebDesign },
    link: '/services/web-design/',
    text: 'web design',
  },
  {
    name: 'app-design',
    image: { mobile: MobileAppDesign, tablet: TabletAppDesign, desktop: DesktopAppDesign },
    link: '/services/app-design/',
    text: 'app design',
  },
  {
    name: 'graphic-design',
    image: { mobile: MobileGraphicDesign, tablet: TabletGraphicDesign, desktop: DesktopGraphicDesign },
    link: '/services/graphic-design/',
    text: 'graphic design',
  },
];

const Services = () => {
  return (
    <section className={styles.service}>
      <div className={styles['service-wrapper']}>
        <ul className={styles['service-list']}>
          {servicesContents.map((content) => (
            <li key={content.name} className={clsx(styles['service-item'], styles[`${content.name}`])}>
              <Link className={styles.link} href='/locations'>
                <picture>
                  <source srcSet={content.image.desktop.src} media='(min-width: 1024px)' width={540} height={640} />
                  <source srcSet={content.image.tablet.src} media='(min-width: 540px)' width={689} height={200} />
                  <Image src={content.image.mobile} width={327} height={250} alt={content.name} />
                </picture>
                <div className={styles.text}>
                  <p className={styles['service-name']}>{content.text}</p>
                  <p className={styles.view}>view projects</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
