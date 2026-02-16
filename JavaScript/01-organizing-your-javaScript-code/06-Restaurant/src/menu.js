export const loadMenu = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // 1. Déclaration de tes données (Tableau d'objets)
    const menuItems = [
        { nom: "Risotto aux Champignons", prix: "18€", description: "Un classique crémeux et parfumé." },
        { nom: "Saumon Sauce Mangue", prix: "22€", description: "Pavé de saumon frais avec sa sauce exotique." },
        { nom: "Burger Maison", prix: "16€", description: "Boeuf d'origine française et comté affiné." }
    ];

    // 2. Création du titre de la page
    const title = document.createElement('h1');
    title.textContent = 'Notre Carte';
    content.appendChild(title);

    // 3. Boucle sur le tableau (le .forEach est plus moderne et lisible que le for)
    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        itemDiv.innerHTML = `
            <h2>${item.nom}</h2>
            <p><strong>Prix :</strong> ${item.prix}</p>
            <p>${item.description}</p>
            <hr>
        `;

        content.appendChild(itemDiv);
    });
};