import { useEffect, useState } from "react";
import "./CardModal.css";

function CardModal({ card, onClose }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (card) {
			setIsOpen(true);
			// Ajouter la classe pour éviter le scroll du body
			document.body.classList.add('modal-open');
		} else {
			setIsOpen(false);
			document.body.classList.remove('modal-open');
		}

		// Cleanup
		return () => {
			document.body.classList.remove('modal-open');
		};
	}, [card]);

	if (!card) return null;

	const handleClose = () => {
		setIsOpen(false);
		setTimeout(() => {
			onClose();
		}, 300); // Délai pour l'animation
	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	return (
		<div className={`modal-backdrop ${isOpen ? 'open' : 'closing'}`} onClick={handleClose}>
			<div className={`card-modal ${isOpen ? 'open' : ''}`} onClick={stopPropagation}>
				<div className="card-modal-header">
					<h2>{card.name}</h2>
					<span className="card-type-badge">{card.cardtype}</span>
				</div>

				<div className="card-modal-image">
					<img src={card.image} alt={card.name} />
				</div>

				<div className="card-modal-details">
					{card.archetype && (
						<div className="detail-row">
							<span className="detail-label">Archetype:</span>
							<span className="detail-value">{card.archetype}</span>
						</div>
					)}

					{card.status && (
						<div className="detail-row">
							<span className="detail-label">Status:</span>
							<span className="detail-value">{card.status}</span>
						</div>
					)}

					<div className="detail-row">
						<span className="detail-label">Effect:</span>
						<p className="detail-value-effect">{card.effect || "Aucun effet"}</p>
					</div>

					{card.cardtype === "monster" && (
						<div className="card-stats-container">
							<div className="stat attack">
								<span className="stat-label">ATK: </span>
								<span className="stat-value">{card.attack}</span>
							</div>
							<div className="stat defense">
								<span className="stat-label">HP: </span>
								<span className="stat-value">{card.hp}</span>
							</div>
						</div>
					)}
				</div>

				<div className="card-modal-actions">
					<button className="action-button-play" onClick={handleClose}>Jouer</button>
					<button className="action-button-close" onClick={handleClose}>Fermer</button>
				</div>
			</div>
		</div>
	);
}

export default CardModal;