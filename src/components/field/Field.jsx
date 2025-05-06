import "./Field.css";
import { useState } from "react";
import Card from "../card/Card.jsx";

function Field({ isOpponent = false }) {
	// État pour suivre les cartes sur le terrain
	const [monsterZone, setMonsterZone] = useState(Array(5).fill(null));
	const [spellZone, setSpellZone] = useState(Array(5).fill(null));
	const [fieldSpell, setFieldSpell] = useState(null);
	const [graveyard, setGraveyard] = useState([]);
	const [deck, setDeck] = useState([]); // Simulé

	return (
		<div className={`field ${isOpponent ? "opponent" : ""}`}>
			<div className="field-container">
				<div className="extra-zones">
					<div className="field-spell-zone">
						{fieldSpell && (
							<Card
								card={fieldSpell}
								faceDown={isOpponent}
								isPlayable={!isOpponent}
							/>
						)}
						{!fieldSpell && <div className="zone-placeholder field-zone"></div>}
					</div>

					<div className="side-zones">
						<div className="graveyard-zone">
							{graveyard.length > 0 ? (
								<div className="zone-counter">{graveyard.length}</div>
							) : (
								<div className="zone-placeholder graveyard"></div>
							)}
						</div>
						<div className="deck-zone">
							<div className="zone-placeholder deck">
								<div className="zone-counter">{isOpponent ? "?" : deck.length}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="main-zones">
					<div className="monster-zone">
						{monsterZone.map((monster, index) => (
							<div key={`m-${index}`} className="card-zone monster">
								{monster ? (
									<Card
										card={monster}
										faceDown={isOpponent && monster.faceDown}
										isPlayable={!isOpponent}
									/>
								) : (
									<div className="zone-placeholder monster-zone"></div>
								)}
							</div>
						))}
					</div>

					<div className="spell-zone">
						{spellZone.map((spell, index) => (
							<div key={`s-${index}`} className="card-zone spell">
								{spell ? (
									<Card
										card={spell}
										faceDown={isOpponent && spell.faceDown}
										isPlayable={!isOpponent}
									/>
								) : (
									<div className="zone-placeholder spell-zone"></div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Field;