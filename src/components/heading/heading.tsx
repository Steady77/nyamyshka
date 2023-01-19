import { FC } from 'react';
import styles from './heading.module.css';

const Heading: FC<{ title: string }> = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};

export default Heading;
