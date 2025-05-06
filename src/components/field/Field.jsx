import "./Field.css";
import Deck from "../deck/Deck.jsx";

function Field({
	isOpponent = false,
	deckCards = [],
	onDraw,
	onShuffle,
	graveyardCards = []
}) {
	return (
		<div className={`field ${isOpponent ? "opponent" : ""}`}>
			<div className="fieldspell-box" />
			<div className="monster-and-spell-box">
				<div className="monster-box">
					{[...Array(5)].map((_, i) => (
						<div className="monster-box-card" key={`m${i}`} />
					))}
				</div>
				<div className="spell-box">
					{[...Array(5)].map((_, i) => (
						<div className="spell-box-card" key={`s${i}`} />
					))}
				</div>
			</div>
			<div className="graveyard-and-deck-box">
				<div className="graveyard-box">
					{graveyardCards.length > 0 && (
						<div className="graveyard-count">{graveyardCards.length}</div>
					)}
				</div>
				<div className="deck-box">
					<Deck
						deckCards={deckCards}
						onDraw={onDraw}
						onShuffle={onShuffle}
						isOpponent={isOpponent}
					/>
				</div>
			</div>
		</div>
	);
}

export default Field;