import React, { useState, useEffect } from 'react';
import Deck from './components/Deck';
import Hand from './components/Hand';
import monstres from './data/monstres';
import sorts from './data/sorts';

function App() {
	const [deck, setDeck] = useState([]);
	const [mainDuJoueur, setMainDuJoueur] = useState([]);

	// Fonction pour générer un deck aléatoire
	const generateDeck = () => {
		const cartesPool = [...monstres, ...sorts];
		const newDeck = [];

		for (let i = 0; i < 30; i++) {
			const randomIndex = Math.floor(Math.random() * cartesPool.length);
			// Créer une copie avec un ID unique pour éviter les doublons de clés
			const carte = { ...cartesPool[randomIndex], uniqueId: `${cartesPool[randomIndex].id}-${i}` };
			newDeck.push(carte);
		}

		return newDeck;
	};

	// Fonction pour piocher une carte
	const piocherCarte = () => {
		if (deck.length === 0 || mainDuJoueur.length >= 10) return;

		const [premiereCarte, ...resteDesDeck] = deck;
		setDeck(resteDesDeck);
		setMainDuJoueur(prev => [...prev, premiereCarte]);
	};

	// Fonction pour jouer une carte
	const jouerCarte = (index) => {
		const nouvelleMain = mainDuJoueur.filter((_, i) => i !== index);
		setMainDuJoueur(nouvelleMain);
	};

	// Initialisation du jeu
	useEffect(() => {
		const nouveauDeck = generateDeck();

		// Piocher 5 cartes initiales
		const mainInitiale = nouveauDeck.slice(0, 5);
		const deckRestant = nouveauDeck.slice(5);

		setMainDuJoueur(mainInitiale);
		setDeck(deckRestant);
	}, []);
	return (
		<div className="p-6 bg-[#1e1e1e] min-h-screen text-white space-y-6">
			<h1 className="text-3xl font-bold text-center">Jeu de Cartes</h1>

			{/* Informations du jeu */}
			<div className="text-center text-gray-300">
				<p>Cartes en main: {mainDuJoueur.length}/10</p>
				<p>Cartes restantes dans le deck: {deck.length}</p>
			</div>

			{/* Deck avec pioche */}
			<div className="flex justify-center">
				<Deck onCardDrawn={piocherCarte} cardsRemaining={deck.length} />
			</div>

			{/* Main du joueur */}
			<div>
				<h2 className="text-xl mb-2">Main du joueur</h2>
				<Hand cartes={mainDuJoueur} onCardPlayed={jouerCarte} />
			</div>

			{/* Instructions */}
			<div className="text-center text-sm text-gray-400">
				<p>Cliquez sur une carte pour la jouer</p>
				<p>Maximum 10 cartes en main</p>
			</div>
		</div>
	);
}
export default App;
