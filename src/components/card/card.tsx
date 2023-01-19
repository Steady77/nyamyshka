import { FC, useState } from 'react';
import styles from './card.module.css';
import cn from 'classnames';
import Border from './border/border';
import { ICard } from './card.interface';

const Card: FC<ICard> = ({
	description,
	portion,
	present,
	subTitle,
	title,
	unit,
	weight,
	image,
	about,
	isSoldOut,
	soldOutMessage,
}) => {
	const [isSelected, setIsSelected] = useState(false);
	const [isLeaved, setIsLeaved] = useState(false);
	const [isHover, setIsHover] = useState(false);
	const [isDefaultHover, setIsDefaultHover] = useState(false);

	const handleSelect = () => {
		setIsSelected((prev) => !prev);
	};

	const handleMouseEnter = () => {
		setIsDefaultHover(true);
		isLeaved && isSelected && setIsHover(true);
	};

	const handleMouseLeave = () => {
		isSelected && setIsLeaved(true);
		isHover && setIsHover(false);
		setIsDefaultHover(false);
	};

	return (
		<article
			className={cn(styles.wrapper, {
				[styles.soldOut]: isSoldOut,
			})}
		>
			<div
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleSelect}
				className={cn(styles.card, {
					[styles.selected]: isSelected,
					[styles.hover]: isHover && isSelected,
					[styles.default]: isDefaultHover,
				})}
				style={{ backgroundImage: `url(${image})` }}
			>
				<Border />

				<p className={cn(styles.about)}>
					{isHover && isSelected ? 'Котэ не одобряет?' : description}
				</p>
				<h3 className={styles.title}>
					{title}
					<span className={cn(styles.subTitle, 'truncate')}>{subTitle}</span>
				</h3>
				<p className={styles.descr}>
					<span>{portion}</span>
					<span>{present}</span>
				</p>
				<div className={cn(styles.weight, 'truncate')}>
					<span className={styles.weightNum}>{weight}</span>
					<span className={styles.unit}>{unit}</span>
				</div>
			</div>

			{isSoldOut ? (
				<p className={styles.call}>{soldOutMessage}</p>
			) : isSelected ? (
				<p className={styles.call}>{about}</p>
			) : (
				<p className={styles.call}>
					Чего сидишь? Порадуй котэ, <span onClick={handleSelect}>купи.</span>
				</p>
			)}
		</article>
	);
};

export default Card;
