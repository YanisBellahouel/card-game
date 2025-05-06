import "./CardModal.css";

function CardModal({ card, onClose }) {
	if (!card) return null;

	return (
		<div className="modal-backdrop" onClick={onClose}>
			<div className="card-modal" onClick={(e) => e.stopPropagation()}>
				<h2>{card.name}</h2>
				<img src={card.image} alt={card.name} />
				<p><strong>Archetype:</strong> {card.archetype}</p>
				<p><strong>Status:</strong> {card.status || "Aucun"}</p>
				<p><strong>Effect:</strong> {card.effect}</p>
				<p><strong>ATK:</strong> {card.attack}</p>
				<p><strong>HP:</strong> {card.hp}</p>
				<button onClick={onClose}>Fermer</button>
			</div>
		</div>
	);
}

export default CardModal;
