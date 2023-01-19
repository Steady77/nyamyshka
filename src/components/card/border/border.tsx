import { FC } from 'react';
import styles from './border.module.css';

const Border: FC = () => {
	return (
		<svg
			className={styles.border}
			width="320"
			height="480"
			viewBox="0 0 320 480"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className={styles.path}
				d="M2 43.8303L43.9614 2L308 2C313.523 2 318 6.47715 318 12V468C318 473.523 313.523 478 308 478H12C6.47716 478 2 473.523 2 468L2 43.8303Z"
				stroke="#1698D9"
				strokeWidth="4"
			/>
		</svg>
	);
};

export default Border;
