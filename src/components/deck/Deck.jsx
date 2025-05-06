import { useState } from "react";
import "./Deck.css";
import Card from "../card/Card.jsx";

function Deck({ deckCards = [], onDraw, onShuffle, isOpponent = false }) {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleDraw = (e) => {
		e.stopPropagation();
		if (deckCards.length > 0 && onDraw) {
			onDraw(deckCards[0]);
		}
	};

	const handleShuffle = (e) => {
		e.stopPropagation();
		if (onShuffle) {
			onShuffle();
		}
	};

	const handleClick = () => {
		if (!isOpponent) {
			setIsExpanded(!isExpanded);
		}
	};

	return (
		<div className="deck-container">
			<div
				className={`deck ${isExpanded ? "expanded" : ""} ${isOpponent ? "opponent" : ""}`}
				onClick={handleClick}
			>
				{deckCards.length > 0 ? (
					<div className="deck-count">{deckCards.length}</div>
				) : (
					<div className="deck-empty">Vide</div>
				)}
			</div>

			{isExpanded && !isOpponent && (
				<div className="deck-actions">
					<button
						className="deck-action-button"
						onClick={handleDraw}
						disabled={deckCards.length === 0}
					>
						Piocher
					</button>
					<button
						className="deck-action-button"
						onClick={handleShuffle}
					>
						Mélanger
					</button>
				</div>
			)}

			{isExpanded && !isOpponent && deckCards.length > 0 && (
				<div className="deck-preview">
					<p>Première carte:</p>
					<Card card={deckCards[0]} onClick={(card) => {
						setIsExpanded(false);
						onDraw(card);
					}} />
				</div>
			)}
		</div>
	);
}

export default Deck;