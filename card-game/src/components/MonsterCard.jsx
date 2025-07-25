import React, { useState } from 'react';

const MonsterCard = ({ monstre, onClick, isSelected = false, isPlayable = true }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`relative w-80 h-96 mx-auto p-4 rounded-xl shadow-lg transition-transform duration-200 cursor-pointer
        ${isPlayable ? 'bg-gray-800 text-white hover:scale-105' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
		>
			{/* Rank (Classe) */}
			<div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
				{monstre.classe}
			</div>

			{/* Nom du monstre */}
			<div className="text-xl font-bold text-center mb-3 max-w-[80%] mx-auto break-words">
				{monstre.nom}
			</div>


			{/* Image du monstre */}
			<div className="flex justify-center items-center mb-4 h-40">
				<img
					src={monstre.image}
					alt={monstre.nom}
					className="h-full object-contain rounded-md"
				/>
			</div>

			{/* Effet */}
			<div className="text-sm italic text-gray-300 mb-4 text-center px-2">
				{monstre.effet || 'Aucun effet'}
			</div>

			{/* Statistiques ATK / PV */}
			<div className="absolute bottom-4 left-0 w-full px-6 flex justify-between">
				<div className="bg-red-700 px-3 py-1 rounded text-sm font-semibold text-center w-[45%]">
					ATK: {monstre.atk}
				</div>
				<div className="bg-green-700 px-3 py-1 rounded text-sm font-semibold text-center w-[45%]">
					PV: {monstre.pv}
				</div>
			</div>

			{/* Overlay sélection */}
			{isSelected && (
				<div className="absolute inset-0 bg-blue-400 bg-opacity-20 rounded-xl pointer-events-none" />
			)}
		</div>
	);
};

export default MonsterCard;
