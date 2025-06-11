import React, { useEffect, useState } from 'react';
import MonsterCard from './components/MonsterCard';
import SpellCard from './components/SpellCard.jsx';
import monstres from './data/monstres.js';
import sorts from './data/sorts.js';

function App() {
	const [mainDuJoueur, setMainDuJoueur] = useState([]);

	useEffect(() => {
		const toutesLesCartes = [
			...monstres.map((carte) => ({ ...carte, typeCarte: 'monstre' })),
			...sorts.map((carte) => ({ ...carte, typeCarte: 'sort' })),
		];

		const mainAleatoire = toutesLesCartes.sort(() => 0.5 - Math.random()).slice(0, 5);
		setMainDuJoueur(mainAleatoire);
	}, []);

	return (
		<div className="p-4 bg-[#1e1e1e] min-h-screen flex gap-4 flex-wrap">
			{mainDuJoueur.map((carte) =>
				carte.typeCarte === 'monstre' ? (
					<MonsterCard key={carte.id} monstre={carte} />
				) : (
					<SpellCard key={carte.id} spell={carte} />
				)
			)}
		</div>
	);
}

export default App;
