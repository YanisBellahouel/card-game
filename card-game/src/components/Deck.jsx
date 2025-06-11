import React, { useEffect, useState } from 'react';
import monstres from '../data/monstres';
import sorts from '../data/sorts';

const Deck = ({ onCardDrawn }) => {
	const generateDeck = () => {
		const cartesPool = [...monstres, ...sorts];
		const deck = [];
		for (let i = 0; i < 30; i++) {
			const randomIndex = Math.floor(Math.random() * cartesPool.length);
			deck.push(cartesPool[randomIndex]);
		}
		return deck;
	};

	const [deck, setDeck] = useState([]);

	// Pioche une carte
	const tirerCarte = () => {
		if (deck.length === 0) return;
		const [carte, ...reste] = deck;
		setDeck(reste);
		onCardDrawn(carte);
	};

	// Initialisation du deck + pioche de 5 cartes
	useEffect(() => {
		const newDeck = generateDeck();
		setDeck(newDeck);

		// On pioche les 5 premières cartes *une fois que le deck est prêt*
		setTimeout(() => {
			for (let i = 0; i < 5; i++) {
				const carte = newDeck[i];
				if (carte) onCardDrawn(carte);
			}
			setDeck((prevDeck) => prevDeck.slice(5)); // on retire les 5 piochées
		}, 0);
	}, []);

	return (
		<div className="flex flex-col items-center gap-2">
			{/* Représentation visuelle du deck */}
			<div className="w-32 h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-lg border border-gray-500 flex items-center justify-center text-white text-xl font-bold">
				{deck.length} cartes
			</div>

			{/* Bouton pour piocher */}
			<button
				onClick={tirerCarte}
				disabled={deck.length === 0}
				className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
					deck.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
				}`}
			>
				Piocher
			</button>
		</div>
	);
};

export default Deck;
