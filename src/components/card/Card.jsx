import "./Card.css";

function Card({ card, onClick, isPlayable = true, faceDown = false }) {
	const handleClick = () => {
		if (onClick && isPlayable) {
			onClick(card);
		}
	};

	return (
		<div
			className={`card ${!isPlayable ? 'disabled' : ''} ${faceDown ? 'face-down' : ''}`}
			onClick={handleClick}
		>
			{!faceDown ? (
				<>
					<div className="card-header">
						<h3 className="card-name">{card.name}</h3>
						{card.cardtype === "monster" && (
							<div className="card-stats">
								<span className="card-atk">ATK/{card.attack}</span>
								<span className="card-hp">HP/{card.hp}</span>
							</div>
						)}
					</div>
					<div className="card-image-container">
						<img src={card.image} alt={card.name} className="card-image" />
					</div>
					<div className="card-type">{card.archetype}</div>
				</>
			) : (
				<div className="card-back"></div>
			)}
		</div>
	);
}

export default Card;