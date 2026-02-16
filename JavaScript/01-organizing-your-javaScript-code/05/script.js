class Projet {
    constructor(nom, budget) {
        this.nom = nom;
        this.budget = budget;
    }
    afficherInfos() {
        console.log(`Nom: ${this.nom}, Budget: ${this.budget}`);
    }
}

class SiteWeb extends Projet {
    constructor(nom, budget, technologie) {
        super(nom, budget);
        this.technologie = technologie;
    }
}

const Midodev = new SiteWeb("Midodev", 1000, "React");
Midodev.afficherInfos();
console.log(Midodev.technologie)