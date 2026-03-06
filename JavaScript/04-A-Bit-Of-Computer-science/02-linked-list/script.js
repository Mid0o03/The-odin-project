class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode; 
    }
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
    }   
    size(){
        let count = 0;
        let currentNode = this.head;
        while(currentNode){
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }
    head(){
        return this.head;
    }
    tail(){
        let currentNode = this.head;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }
    at(index){
        let current = this.head;
    let count = 0;
    while (current !== null) {
        if (count === index) return current;
        current = current.nextNode;
        count++;
    }
    return null; // Retourne null si l'index est hors limites
    }
    pop(){
        if (!this.head) return null;
    if (!this.head.nextNode) {
        this.head = null;
        return;
    }
    let current = this.head;
    // On s'arrête quand le PROCHAIN nœud est le dernier
    while (current.nextNode.nextNode !== null) {
        current = current.nextNode;
    }
    current.nextNode = null;
    }
    contains(value){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }
    find(value){
        let currentNode = this.head;
    let index = 0; // 🧮 On initialise notre compteur

    while (currentNode) {
        if (currentNode.value === value) {
            return index; // ✅ On renvoie la position actuelle
        }
        currentNode = currentNode.nextNode;
        index++; // 🆙 On passe à l'index suivant
    }
    return null; // ❌ Non trouvé
    }
    delete(value){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                currentNode.nextNode = currentNode.nextNode.nextNode;
                return;
            }
            currentNode = currentNode.nextNode;
        }
    }
    insertAt(value, index){
        if (index === 0) return this.prepend(value);
        const prev = this.at(index - 1);
        if (!prev) return; // Index invalide
        const newNode = new Node(value, prev.nextNode);
        prev.nextNode = newNode;
    }
    toString(){
        let currentNode = this.head;
        let string = "";
        while(currentNode){
            string += currentNode.value + " -> ";
            currentNode = currentNode.nextNode;
        }
        string += "null";
        return string;
    }
    removeAt(index){
        if (index === 0) {
    this.head = this.head.nextNode;
    return;
        }
    const prev = this.at(index - 1);
    if (!prev || !prev.nextNode) return;
    prev.nextNode = prev.nextNode.nextNode;
    }
    
}