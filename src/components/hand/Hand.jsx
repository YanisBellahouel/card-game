import "./Hand.css";
import Card from "../card/Card.jsx";

function Hand({ handCards = [], onCardClick }) {
	return (
		<div className="hand">
			{handCards.map((card, index) => (
				<Card key={index} card={card} onClick={onCardClick} />
			))}
		</div>
	);
}

export default Hand;
