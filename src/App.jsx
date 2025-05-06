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
	const [selectedCard, setSelectedCard] = useState(null); // pour la modale

	return (
		<div className="app-container">
			<h1>Card Game</h1>
			<OpponentField />
			<Field />
			<PlayerInfos
				name="Yanis"
				lifePoints={8000}
				handCount={handCards.length}
				deckCount={35}
			/>
			<Hand handCards={handCards} onCardClick={(card) => setSelectedCard(card)} />
			<CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />

		</div>
	);
}


export default App;
