import { useState } from "react";
import "./App.css";
import { Cards } from "./data/Cards.js";
import CardModal from "./components/cardModal/CardModal.jsx";
import Field from "./components/field/Field.jsx";
import OpponentField from "./components/field/OpponentField.jsx";
import Hand from "./components/hand/Hand.jsx";
import PlayerInfos from "./components/playerInfos/PlayerInfos.jsx";

function App() {
	const [handCards, setHandCards] = useState(Cards.slice(0, 3)); // Main simulée
	const [selectedCard, setSelectedCard] = useState(null); // Pour la modale
	const [playerLP, setPlayerLP] = useState(8000);
	const [opponentLP, setOpponentLP] = useState(8000);
	const [phase, setPhase] = useState("Draw"); // Draw, Standby, Main1, Battle, Main2, End

	// Phases du jeu
	const phases = ["Draw", "Standby", "Main1", "Battle", "Main2", "End"];

	const nextPhase = () => {
		const currentIndex = phases.indexOf(phase);
		const nextIndex = (currentIndex + 1) % phases.length;
		setPhase(phases[nextIndex]);
	};

	return (
		<div className="game-container">
			<div className="game-board">
				<div className="opponent-area">
					<PlayerInfos
						name="Adversaire"
						lifePoints={opponentLP}
						handCount={5} // Simulé
						deckCount={35}
						isOpponent={true}
					/>
					<OpponentField />
				</div>

				<div className="phase-indicator">
					<h3>Phase: {phase}</h3>
					<button onClick={nextPhase} className="phase-button">Phase suivante</button>
				</div>

				<div className="player-area">
					<Field />
					<PlayerInfos
						name="Player"
						lifePoints={playerLP}
						handCount={handCards.length}
						deckCount={35}
					/>
				</div>
			</div>

			<Hand handCards={handCards} onCardClick={(card) => setSelectedCard(card)} />

			{selectedCard && (
				<CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
			)}
		</div>
	);
}

export default App;