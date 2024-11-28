import type { FunctionComponent } from 'react';
import HomeIcon from '@/assets/icons/housing.svg?react';
import styles from './styles.module.css';

const Home: FunctionComponent = () => (
  <div>
    <p>
      Home <HomeIcon className={styles.icon} />
    </p>
    <p>New home CTA block much wow</p>
    <p>New home CTA block2 much wow</p>
  </div>
);

export default Home;
