import React from 'react';
import MonsterCard from './MonsterCard';
import SpellCard from './SpellCard';

const Hand = ({ cartes, onCardPlayed }) => {
	return (
		<div className="flex gap-4 overflow-x-auto p-4 bg-gray-900 rounded-lg min-h-[200px]">
			{cartes.length === 0 ? (
				<p className="text-gray-400 italic">Aucune carte en main</p>
			) : (
				cartes.map((carte, index) => {
					const key = `${carte.id}-${index}`;

					const handleCardClick = () => {
						onCardPlayed(index);
					};

					if (carte.typeCarte === 'monstre') {
						return (
							<div key={key} onClick={handleCardClick} className="cursor-pointer hover:scale-105 transition-transform">
								<MonsterCard monstre={carte} />
							</div>
						);
					} else if (carte.typeCarte === 'sort') {
						return (
							<div key={key} onClick={handleCardClick} className="cursor-pointer hover:scale-105 transition-transform">
								<SpellCard spell={carte} />
							</div>
						);
					} else {
						return null;
					}
				})
			)}
		</div>
	);
};

export default Hand;
