import Field from "./Field.jsx";

function OpponentField({ deckCards = [], graveyardCards = [] }) {
	return (
		<Field
			isOpponent={true}
			deckCards={deckCards}
			graveyardCards={graveyardCards}
		/>
	);
}

export default OpponentField;