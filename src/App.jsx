import { useState } from "react";
import "./App.css";
import { Cards } from "./data/Cards.js";
import CardModal from "./components/cardModal/CardModal.jsx";
import Field from "./components/field/Field.jsx";
import OpponentField from "./components/field/OpponentField.jsx";
import Hand from "./components/hand/Hand.jsx";
import PlayerInfos from "./components/playerInfos/PlayerInfos.jsx";

function App() {
	const [handCards, setHandCards] = useState(Cards.slice(0, 3)); // main simulée
	const [playerDeckCards, setPlayerDeckCards] = useState(Cards.concat(Cards).concat(Cards)); // Exemple avec plusieurs cartes
	const [playerGraveyardCards, setPlayerGraveyardCards] = useState([]);
	const [opponentDeckCards, setOpponentDeckCards] = useState(Cards.concat(Cards));
	const [opponentGraveyardCards, setOpponentGraveyardCards] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null); // pour la modale

	// Fonction pour piocher une carte
	const handleDrawCard = (card) => {
		if (playerDeckCards.length > 0) {
			const newDeck = [...playerDeckCards];
			const drawnCard = newDeck.shift(); // Retire la première carte
			setPlayerDeckCards(newDeck);
			setHandCards([...handCards, drawnCard]); // Ajoute à la main
		}
	};

	// Fonction pour mélanger le deck
	const handleShuffleDeck = () => {
		const shuffled = [...playerDeckCards];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		setPlayerDeckCards(shuffled);
	};

	return (
		<div className="app-container">
			<h1>Card Game</h1>
			<OpponentField
				deckCards={opponentDeckCards}
				graveyardCards={opponentGraveyardCards}
			/>
			<Field
				deckCards={playerDeckCards}
				onDraw={handleDrawCard}
				onShuffle={handleShuffleDeck}
				graveyardCards={playerGraveyardCards}
			/>
			<PlayerInfos
				name="Yanis"
				lifePoints={8000}
				handCount={handCards.length}
				deckCount={playerDeckCards.length}
			/>
			<Hand handCards={handCards} onCardClick={(card) => setSelectedCard(card)} />
			<CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
		</div>
	);
}

export default App;