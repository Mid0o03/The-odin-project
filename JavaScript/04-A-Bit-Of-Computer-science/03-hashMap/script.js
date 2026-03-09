class Node {
    constructor(key = null, value = null, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.capacity).fill(null);
        this.occupied = 0; // Pour savoir quand agrandir
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.capacity;
    }

    _checkIndex(index) {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
    }

    set(key, value) {
        // Vérification du Load Factor avant d'ajouter
        if ((this.occupied + 1) / this.capacity > this.loadFactor) {
            this.resize();
        }

        const index = this.hash(key);
        this._checkIndex(index);

        if (this.buckets[index] === null) {
            // Cas 1 : Le bucket est vide, on crée le premier nœud
            this.buckets[index] = new Node(key, value);
            this.occupied++; // On a ajouté une nouvelle clé
        } else {
            // Cas 2 : Il y a déjà quelque chose (collision ou mise à jour)
            let current = this.buckets[index];
            while (current !== null) {
                if (current.key === key) {
                    current.value = value; // Mise à jour de la valeur
                    return;
                }
                if (current.nextNode === null) break; // On est à la fin de la liste
                current = current.nextNode;
            }
            // On l'ajoute à la fin
            current.nextNode = new Node(key, value);
            this.occupied++;
        }
    }

    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2; // On double la capacité
        this.buckets = new Array(this.capacity).fill(null);
        this.occupied = 0; // On va recalculer ce compteur en ré-insérant

        oldBuckets.forEach(bucket => {
            let current = bucket;
            while (current !== null) {
                // On ré-insère chaque paire dans le nouveau tableau
                this.set(current.key, current.value);
                current = current.nextNode;
            }
        });
    }

    get(key) {
        const index = this.hash(key);
        this._checkIndex(index);

        let current = this.buckets[index];
        while (current !== null) {
            if (current.key === key) {
                return current.value;
            }
            current = current.nextNode;
        }
        return null;
    }

    has(key) {
        return this.get(key) !== null;
    }

    remove(key) {
        const index = this.hash(key);
        this._checkIndex(index);

        let current = this.buckets[index];
        let previous = null;

        while (current !== null) {
            if (current.key === key) {
                if (previous === null) {
                    // Si le noeud à supprimer est le premier du bucket
                    this.buckets[index] = current.nextNode;
                } else {
                    // Si le noeud à supprimer est au milieu ou à la fin de la liste
                    previous.nextNode = current.nextNode;
                }
                this.occupied--;
                return true;
            }
            previous = current;
            current = current.nextNode;
        }
        return false; // La clé n'a pas été trouvée
    }

    length() {
        return this.occupied;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null);
        this.occupied = 0;
    }

    keys() {
        let allKeys = [];
        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];
            while (current !== null) {
                allKeys.push(current.key); // On récupère la clé
                current = current.nextNode;
            }
        }
        return allKeys;
    }

    values() {
        let allValues = [];
        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];
            while (current !== null) {
                allValues.push(current.value); // On récupère la valeur
                current = current.nextNode;
            }
        }
        return allValues;
    }

    entries() {
        let allEntries = [];
        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];
            while (current !== null) {
                allEntries.push([current.key, current.value]); // On récupère la paire
                current = current.nextNode;
            }
        }
        return allEntries;
    }
}