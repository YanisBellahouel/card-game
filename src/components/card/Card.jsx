import "./Card.css";

function Card({ card, onClick }) {
	return (
		<div className="card" onClick={() => onClick?.(card)}>
			<h3>{card.name}</h3>
			<img src={card.image} alt={card.name} />
		</div>
	);
}

export default Card;
