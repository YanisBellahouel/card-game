import React, { useEffect, useState } from 'react';
import monstres from '../data/monstres';
import sorts from '../data/sorts';

const Deck = ({ onCardDrawn, cardsRemaining }) => {
	const tirerCarte = () => {
		onCardDrawn();
	};

	return (
		<div className="flex flex-col items-center gap-2">
			<div className="w-32 h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-lg border border-gray-500 flex items-center justify-center text-white text-xl font-bold">
				{cardsRemaining} cartes
			</div>

			<button
				onClick={tirerCarte}
				disabled={cardsRemaining === 0}
				className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${cardsRemaining === 0 ? 'opacity-50 cursor-not-allowed' : ''
					}`}
			>
				Piocher
			</button>
		</div>
	);
};
export default Deck;
