import React from 'react';
import MonsterCard from './MonsterCard';
import SpellCard from './SpellCard';

const Hand = ({ cartes }) => {
	return (
		<div className="flex gap-4 overflow-x-auto p-4 bg-gray-900 rounded-lg">
			{cartes.map((carte, index) => {
				const key = `${carte.id}-${index}`;

				if (carte.typeCarte === 'monstre') {
					return <MonsterCard key={key} monstre={carte} />;
				} else if (carte.typeCarte === 'sort') {
					return <SpellCard key={key} spell={carte} />;
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default Hand;
