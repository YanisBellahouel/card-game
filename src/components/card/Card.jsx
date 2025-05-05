import "./Card.css";

function Card({ card, onClick }) {
	return (
		<div className="card" onClick={() => onClick?.(card)}>
			<h2>{card.name}</h2>
			<img src={card.image} alt={card.name} />
			<p>Status: {card.status}</p>
			<p>Effect: {card.effect}</p>
			<p>ATK: {card.attack}</p>
			<p>HP: {card.hp}</p>
		</div>
	);
}

export default Card;
