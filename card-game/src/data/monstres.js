import dragonImg from '../assets/dragon-svgrepo-com.svg';

const monstres = [
	{
		id: "m1",
		typeCarte: "monstre",
		nom: "Dragon de Flamme Écarlate",
		classe: "S",
		image: dragonImg,
		type: "Dragon",
		archetype: "Flamme Écarlate",
		condition : "sacrifier 1 monstre Flamme Écarlate sur votre terrain.",
		effet: "Inflige 100 de dégats à tous les monstres adverse au moment de l'invocation.",
		atk: 700,
		pv: 600
	},
	{
		id: "m2",
		typeCarte: "monstre",
		nom: "Guerrier Spectral",
		classe: "A",
		image: "https://example.com/images/guerrier_spectral.png",
		type: "Guerrier",
		archetype: "Ombre",
		condition: "aucune condition d'invocation.",
		effet: "aucun effet spécial.",
		atk: 500,
		pv: 400
	},
	{
		id: "m3",
		typeCarte: "monstre",
		nom: "Sylphide Naissante",
		classe: "B",
		image: "https://example.com/images/sylphide_naissante.png",
		type: "Esprit",
		archetype: "Sylphide",
		condition: "aucune condition d'invocation.",
		effet: "Rend 100 PV à un allié au moment de l'invocation.",
		atk: 300,
		pv: 350
	}
];

export default monstres;
