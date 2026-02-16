const parc = {
    nom: "Parc Astérix",
    localisation: "Plailly",
    attractions: 42
};

// 1. Transformation en JSON (car le localStorage n'accepte que du texte)
const parcJSON = JSON.stringify(parc);

// 2. Stockage
localStorage.setItem('monParc', parcJSON);

// 3. Récupération
const donneesRecuperees = localStorage.getItem('monParc');

// 4. Conversion inverse
const parcObjet = JSON.parse(donneesRecuperees);

console.log(parcObjet.nom); // Doit afficher "Parc Astérix"