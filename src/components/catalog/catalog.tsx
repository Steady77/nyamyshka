import { FC } from 'react';
import Card from '../card/card';
import { ICard } from '../card/card.interface';
import styles from './catalog.module.css';

const Catalog: FC<{ items: ICard[] }> = ({ items }) => {
	return (
		<div className={styles.catalog}>
			{items.map((card) => (
				<Card
					{...card}
					key={card.id}
				/>
			))}
		</div>
	);
};

export default Catalog;
