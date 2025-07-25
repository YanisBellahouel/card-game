const spells = [
	{
		id: "s1",
		typeCarte: "sort",
		nom: "Soufle écarlate",
		classe: "S",
		image: "https://example.com/images/souffle_ecarlate.png",
		type: "Normal",
		archetype: "Flamme Écarlate",
		coût : 3,
		effet: "Inflige 400 dégâts à tous les monstres adverses.",
		cible: "tous_monstres_adverses"
	},
	{
		id: "s2",
		typeCarte: "sort",
		nom: "Bouclier des esprits",
		classe: "A",
		image: "https://example.com/images/bouclier_esprits.png",
		type: "Réaction",
		archetype: "Sylphide",
		coût : 2,
		effet: "Empêche les dégâts subis par un allié pendant un tour.",
		cible: "monstre_allié"
	},
	{
		id: "s3",
		typeCarte: "sort",
		nom: "éppée spectrale",
		classe: "B",
		image: "https://example.com/images/epee_spectrale.png",
		type: "equipement",
		archetype: "Ombre",
		coût : 1,
		effet: "ajoute 100 d'atk au monstre équipé.",
		cible: "monstre_allié"
	}
]

export default spells;