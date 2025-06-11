import React, { useState, useEffect } from 'react';
import Deck from './components/Deck';
import Hand from './components/Hand';
import Board from './components/Board';
import monstres from './data/monstres';
import sorts from './data/sorts';

function App() {
	const [deck, setDeck] = useState([]);
	const [mainDuJoueur, setMainDuJoueur] = useState([]);
	const [boardCards, setBoardCards] = useState(Array(5).fill(null));

	// Génère un deck de 30 cartes aléatoires (avec doublons)
	const generateDeck = () => {
		const cartesPool = [...monstres, ...sorts];
		const newDeck = [];

		for (let i = 0; i < 30; i++) {
			const randomIndex = Math.floor(Math.random() * cartesPool.length);
			// copie avec ID unique pour clé React
			const carte = { ...cartesPool[randomIndex], uniqueId: `${cartesPool[randomIndex].id}-${i}` };
			newDeck.push(carte);
		}

		return newDeck;
	};

	// Piocher une carte (max 10 cartes en main)
	const piocherCarte = () => {
		if (deck.length === 0 || mainDuJoueur.length >= 10) return;

		const [premiereCarte, ...resteDesDeck] = deck;
		setDeck(resteDesDeck);
		setMainDuJoueur(prev => [...prev, premiereCarte]);
	};

	// Jouer une carte depuis la main (pose sur la première case libre du board)
	const jouerCarte = (index) => {
		const firstEmptyIndex = boardCards.findIndex(c => c === null);
		if (firstEmptyIndex === -1) {
			alert("Le board est plein, impossible de jouer plus de cartes !");
			return;
		}

		const carte = mainDuJoueur[index];
		const nouvelleMain = mainDuJoueur.filter((_, i) => i !== index);
		setMainDuJoueur(nouvelleMain);

		const newBoard = [...boardCards];
		newBoard[firstEmptyIndex] = carte;
		setBoardCards(newBoard);
	};

	// Initialisation : crée deck, main initiale (5 cartes), board vide
	useEffect(() => {
		const nouveauDeck = generateDeck();

		const mainInitiale = nouveauDeck.slice(0, 5);
		const deckRestant = nouveauDeck.slice(5);

		setMainDuJoueur(mainInitiale);
		setDeck(deckRestant);
		setBoardCards(Array(5).fill(null));
	}, []);

	return (
		<div className="p-6 bg-[#1e1e1e] min-h-screen text-white space-y-6">
			<h1 className="text-3xl font-bold text-center">Jeu de Cartes</h1>

			{/* Infos du jeu */}
			<div className="text-center text-gray-300">
				<p>Cartes en main : {mainDuJoueur.length} / 10</p>
				<p>Cartes restantes dans le deck : {deck.length}</p>
			</div>

			{/* Deck avec bouton pioche */}
			<div className="flex justify-center">
				<Deck onCardDrawn={piocherCarte} cardsRemaining={deck.length} />
			</div>

			{/* Main du joueur */}
			<div>
				<h2 className="text-xl mb-2">Main du joueur</h2>
				<Hand cartes={mainDuJoueur} onCardPlayed={jouerCarte} />
			</div>

			{/* Board */}
			<div>
				<h2 className="text-xl mb-2">Plateau de jeu</h2>
				<Board boardCards={boardCards} />
			</div>

			{/* Instructions */}
			<div className="text-center text-sm text-gray-400">
				<p>Cliquez sur une carte dans la main pour la jouer sur le plateau.</p>
				<p>Maximum 10 cartes en main, 5 cartes sur le plateau.</p>
			</div>
		</div>
	);
}

export default App;
