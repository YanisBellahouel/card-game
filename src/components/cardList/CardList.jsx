import "./CardList.css";
import { Cards } from "../../data/Cards.js";
import Card from "../card/Card.jsx";

function CardList() {
	return (
		<div className="card-list">
			{Cards.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</div>
	);
}

export default CardList;
