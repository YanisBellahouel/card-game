import React from 'react';
import MonsterCard from './MonsterCard';
import SpellCard from './SpellCard';

const Board = ({ boardCards }) => {
	return (
		<div className="flex gap-4 p-4 bg-gray-800 rounded-lg min-h-[220px] justify-center">
			{boardCards.map((carte, index) => (
				<div
					key={index}
					className="w-32 h-48 bg-gray-700 rounded border border-gray-600 flex items-center justify-center"
				>
					{carte ? (
						carte.typeCarte === 'monstre' ? (
							<MonsterCard monstre={carte} />
						) : (
							<SpellCard spell={carte} />
						)
					) : (
						<span className="text-gray-500 italic">Vide</span>
					)}
				</div>
			))}
		</div>
	);
};

export default Board;
