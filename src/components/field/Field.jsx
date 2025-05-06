import "./Field.css";

function Field({ isOpponent = false }) {
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
				<div className="graveyard-box" />
				<div className="deck-box" />
			</div>
		</div>
	);
}

export default Field;
