import React, { useState } from 'react';

const SpellCard = ({ spell, onClick, isSelected = false, isPlayable = true }) => {
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
				{spell.classe}
			</div>

			{/* Nom du spell */}
			<div className="text-xl font-bold text-center mb-3 max-w-[80%] mx-auto break-words">
				{spell.nom}
			</div>


			{/* Image du spell */}
			<div className="flex justify-center items-center mb-4 h-40">
				<img
					src={spell.image}
					alt={spell.nom}
					className="h-full object-contain rounded-md"
				/>
			</div>

			{/* Effet */}
			<div className="text-sm italic text-gray-300 mb-4 text-center px-2">
				{spell.effet || 'Aucun effet'}
			</div>

			{/* Overlay sélection */}
			{isSelected && (
				<div className="absolute inset-0 bg-blue-400 bg-opacity-20 rounded-xl pointer-events-none" />
			)}
		</div>
	);
};

export default SpellCard;
