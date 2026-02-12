// 1. Le Constructeur
function Player(name, level, isReady) {
    this.name = name;
    this.level = level;
    this.isReady = isReady;
}

// 2. Ajout de la méthode au Prototype
Player.prototype.toggleReady = function () {
    this.isReady = !this.isReady;
    console.log(`${this.name} est maintenant ${this.isReady ? 'prêt' : 'pas prêt'}`);
};

// 3. Création de ton instance
const mael = new Player("Mael", 7, false);