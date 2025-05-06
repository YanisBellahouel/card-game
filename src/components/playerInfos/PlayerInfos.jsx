import "./PlayerInfos.css";

function PlayerInfos({ name, lifePoints, handCount, deckCount }) {
	return (
		<div className="player-infos">
			<h2>{name}</h2>
			<p>LP : {lifePoints}</p>
			<p>Cartes en main : {handCount}</p>
			<p>Cartes dans le deck : {deckCount}</p>
		</div>
	);
}

export default PlayerInfos;
