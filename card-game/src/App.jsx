import React, { useState } from 'react';
import Deck from './components/Deck';
import Hand from './components/Hand';

function App() {
	const [mainDuJoueur, setMainDuJoueur] = useState([]);

	const handleCardDrawn = (carte) => {
		// Maximum de 10 cartes en main
		if (mainDuJoueur.length < 10) {
			setMainDuJoueur((prev) => [...prev, carte]);
		}
	};

	return (
		<div className="p-6 bg-[#1e1e1e] min-h-screen text-white space-y-6">
			<h1 className="text-3xl font-bold text-center">Jeu de Cartes</h1>

			{/* Deck avec pioche */}
			<div className="flex justify-center">
				<Deck onCardDrawn={handleCardDrawn} />
			</div>

			{/* Main du joueur */}
			<div>
				<h2 className="text-xl mb-2">Main du joueur</h2>
				<Hand cartes={mainDuJoueur} />
			</div>
		</div>
	);
}

export default App;
