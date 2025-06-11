import React, { useEffect, useState } from 'react';
import MonsterCard from './components/MonsterCard';
import monstres from './data/monstres.json';

const Main = () => {
	const [mainDuJoueur, setMainDuJoueur] = useState([]);

	useEffect(() => {
		const cartesTirees = monstres.sort(() => 0.5 - Math.random()).slice(0, 3);
		setMainDuJoueur(cartesTirees);
	}, []);

	return (
		<div className="p-4 bg-[#1e1e1e] min-h-screen flex gap-4 flex-wrap">
			{mainDuJoueur.map((monstre) => (
				<MonsterCard key={monstre.id} monstre={monstre} />
			))}
		</div>
	);
};

export default Main;
