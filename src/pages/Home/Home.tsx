import type { FunctionComponent } from 'react';
import HomeIcon from '@/assets/icons/housing.svg?react';
import styles from './styles.module.css';

const Home: FunctionComponent = () => (
  <div>
    <p>
      Home <HomeIcon className={styles.icon} />
    </p>
    <p>New home CTA block much wow</p>
    <div style={{ float: 'left' }}>
      <p>New home CTA2 block much wow</p>
    </div>
  </div>
);

export default Home;
