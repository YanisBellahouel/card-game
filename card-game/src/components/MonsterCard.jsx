import React from 'react';

const MonsterCard = ({ monstre }) => {
	return (
		<div className="bg-gray-800 text-white rounded-xl p-4 shadow-md w-60 hover:scale-105 transition">
			<h2 className="text-xl font-bold mb-2">{monstre.nom}</h2>
			<p className="text-sm text-gray-400 mb-1">Classe : {monstre.classe}</p>
			<p className="text-sm text-gray-400 mb-1">Type : {monstre.type}</p>
			<p className="text-sm text-gray-400 mb-1">Archétype : {monstre.archetype}</p>
			<div className="flex justify-between text-sm my-2">
				<span>🗡️ ATK : {monstre.atk}</span>
				<span>❤️ PV : {monstre.pv}</span>
			</div>
			{monstre.effet && (
				<p className="text-xs italic text-gray-300 mt-2">✨ {monstre.effet}</p>
			)}
		</div>
	);
};

export default MonsterCard;
