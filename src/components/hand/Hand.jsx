import { useState, useEffect } from "react";
import "./Hand.css";
import Card from "../card/Card.jsx";

function Hand({ handCards = [], onCardClick, isOpponent = false }) {
	const [selectedIndex, setSelectedIndex] = useState(null);

	// Pour créer l'effet d'éventail pour les cartes
	const calculateCardStyle = (index, total) => {
		if (total <= 1) return {};

		const maxRotation = Math.min(total * 3, 30); // Maximum rotation angle
		const middle = (total - 1) / 2;
		const position = index - middle;
		const rotation = (position / middle) * (maxRotation / 2);
		const translateY = Math.abs(rotation) * 0.8; // Carte baisse légèrement sur les côtés

		return {
			transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
			zIndex: index === selectedIndex ? 10 : total - Math.abs(position)
		};
	};

	const handleCardHover = (index) => {
		setSelectedIndex(index);
	};

	const handleCardLeave = () => {
		setSelectedIndex(null);
	};

	return (
		<div className="hand-container">
			<div className={`hand ${isOpponent ? 'opponent-hand' : ''}`}>
				{handCards.map((card, index) => (
					<div
						key={index}
						className={`hand-card-slot ${selectedIndex === index ? 'selected' : ''}`}
						style={calculateCardStyle(index, handCards.length)}
						onMouseEnter={() => handleCardHover(index)}
						onMouseLeave={handleCardLeave}
					>
						<Card
							card={card}
							onClick={onCardClick}
							faceDown={isOpponent}
							isPlayable={!isOpponent}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Hand;