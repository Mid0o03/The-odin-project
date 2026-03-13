// ============================================================
//  NŒUD (Node) — Un élément de l'arbre
// ============================================================
class Node {
  constructor(data) {
    this.data = data;   // La valeur stockée
    this.left = null;   // Enfant gauche (valeur inférieure)
    this.right = null;  // Enfant droit  (valeur supérieure)
  }
}

// ============================================================
//  ARBRE BINAIRE DE RECHERCHE (Binary Search Tree)
// ============================================================
class Tree {
  constructor(array) {
    // On trie le tableau et on supprime les doublons avant de construire l'arbre
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArray, 0, sortedArray.length - 1);
  }

  // ----------------------------------------------------------
  //  CONSTRUCTION
  // ----------------------------------------------------------

  /**
   * Construit un BST équilibré à partir d'un tableau trié.
   * Stratégie : prendre le milieu comme racine, puis récurser sur
   * la moitié gauche et la moitié droite.
   *
   * @param {number[]} array  - Tableau trié sans doublons
   * @param {number}   start  - Indice de début
   * @param {number}   end    - Indice de fin
   * @returns {Node|null}     - Le nœud racine du sous-arbre
   */
  buildTree(array, start, end) {
    // Cas de base : la zone est vide → pas de nœud
    if (start > end) return null;

    // Le milieu devient la racine (garantit l'équilibre)
    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    // Récursion sur les sous-tableaux gauche et droite
    node.left  = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);

    return node;
  }

  // ----------------------------------------------------------
  //  INSERTION / SUPPRESSION
  // ----------------------------------------------------------

  /**
   * Insère une valeur dans l'arbre en respectant la propriété BST.
   * Si la valeur existe déjà, on ne l'insère pas (pas de doublons).
   *
   * @param {number} value - La valeur à insérer
   */
  insert(value) {
    // TODO : parcourir l'arbre (gauche si < racine, droite si >) 
    //        jusqu'à trouver une place vide (null) et créer un Node
  }

  /**
   * Supprime un nœud de l'arbre en gérant 3 cas :
   *  1. Le nœud est une feuille (pas d'enfants)  → on le supprime simplement
   *  2. Le nœud a un seul enfant                 → on le remplace par son enfant
   *  3. Le nœud a deux enfants                   → on le remplace par son
   *     successeur in-order (plus petite valeur du sous-arbre droit)
   *
   * @param {number} value - La valeur à supprimer
   */
  deleteItem(value) {
    // TODO : utiliser une fonction récursive qui renvoie le nouveau nœud
    //        après suppression et le réassigne à node.left / node.right
  }

  // ----------------------------------------------------------
  //  RECHERCHE
  // ----------------------------------------------------------

  /**
   * Cherche un nœud contenant la valeur donnée.
   *
   * @param {number} value  - La valeur à trouver
   * @returns {Node|null}   - Le nœud trouvé, ou null si absent
   */
  find(value) {
    // TODO : partir de la racine, aller à gauche si value < node.data,
    //        à droite si value > node.data, retourner le nœud si égal
  }

  // ----------------------------------------------------------
  //  PARCOURS (Traversals)
  // ----------------------------------------------------------

  /**
   * Parcours en largeur (Breadth-First / Level-Order).
   * Visite les nœuds étage par étage, de gauche à droite.
   * Utilise une file (queue) pour garder en mémoire les prochains nœuds.
   *
   * @param {Function} [callback] - Appelé sur chaque nœud si fourni
   * @returns {number[]|undefined} - Tableau des valeurs si pas de callback
   */
  levelOrder(callback) {
    if (!this.root) return [];

    const queue   = [this.root]; // File d'attente — on commence par la racine
    const results = [];

    while (queue.length > 0) {
      const node = queue.shift(); // On sort le premier nœud de la file

      if (callback) callback(node);
      else          results.push(node.data);

      // On met les enfants en file pour traiter le prochain étage
      if (node.left)  queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (!callback) return results;
  }

  /**
   * Parcours In-Order (Gauche → Nœud → Droite).
   * Résultat : les valeurs dans l'ordre croissant.
   *
   * @param {Node}     [node=this.root] - Nœud courant (récursion)
   * @param {number[]} [results=[]]     - Accumulateur de résultats
   * @param {Function} [callback]       - Appelé sur chaque nœud si fourni
   * @returns {number[]|undefined}
   */
  inOrder(node = this.root, results = [], callback) {
    if (node === null) return;

    this.inOrder(node.left, results, callback);   // ← Gauche d'abord

    if (callback) callback(node);                 // ← Nœud courant
    else          results.push(node.data);

    this.inOrder(node.right, results, callback);  // ← Droite ensuite

    if (!callback) return results;
  }

  /**
   * Parcours Pre-Order (Nœud → Gauche → Droite).
   * Utile pour copier / sérialiser un arbre.
   *
   * @param {Function} [callback]      - Appelé sur chaque nœud si fourni
   * @param {Node}     [node=this.root] - Nœud courant (récursion)
   * @returns {number[]|undefined}
   */
  preOrder(callback, node = this.root) {
    // TODO : visiter le nœud courant EN PREMIER,
    //        puis récurser sur node.left, puis sur node.right
  }

  /**
   * Parcours Post-Order (Gauche → Droite → Nœud).
   * Utile pour supprimer / libérer un arbre entier.
   *
   * @param {Function} [callback]      - Appelé sur chaque nœud si fourni
   * @param {Node}     [node=this.root] - Nœud courant (récursion)
   * @returns {number[]|undefined}
   */
  postOrder(callback, node = this.root) {
    // TODO : récurser sur node.left, puis sur node.right,
    //        et visiter le nœud courant EN DERNIER
  }

  // ----------------------------------------------------------
  //  MESURES ET ÉQUILIBRE
  // ----------------------------------------------------------

  /**
   * Calcule la hauteur d'un nœud.
   * Hauteur = nombre d'arêtes sur le chemin le plus long
   * entre ce nœud et une feuille.
   * (Un nœud feuille a une hauteur de 0, null retourne -1.)
   *
   * @param {Node|null} node - Le nœud dont on veut la hauteur
   * @returns {number}
   */
  height(node) {
    // TODO : si node est null, retourner -1
    //        sinon : 1 + Math.max(height(node.left), height(node.right))
  }

  /**
   * Calcule la profondeur d'un nœud.
   * Profondeur = nombre d'arêtes entre la racine et ce nœud.
   * (La racine a une profondeur de 0.)
   *
   * @param {Node} node - Le nœud dont on veut la profondeur
   * @returns {number}
   */
  depth(node) {
    // TODO : parcourir l'arbre depuis this.root en comptant les étapes
    //        jusqu'à trouver le nœud cible
  }

  /**
   * Vérifie si l'arbre est équilibré.
   * Un arbre est équilibré si, pour chaque nœud, la différence de hauteur
   * entre ses sous-arbres gauche et droite est ≤ 1.
   *
   * @param {Node} [node=this.root]
   * @returns {boolean}
   */
  isBalanced(node = this.root) {
    if (node === null) return true; // Un arbre vide est équilibré

    // Différence de hauteur entre les deux sous-arbres
    const heightDiff = Math.abs(this.height(node.left) - this.height(node.right));

    // L'arbre est équilibré si :
    //  - la différence locale est ≤ 1
    //  - ET les deux sous-arbres sont eux-mêmes équilibrés
    return (
      heightDiff <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    );
  }

  /**
   * Rééquilibre l'arbre s'il ne l'est plus.
   * Stratégie simple :
   *  1. Extraire toutes les valeurs en ordre croissant (inOrder)
   *  2. Reconstruire l'arbre depuis zéro avec buildTree
   */
  rebalance() {
    const sortedValues = this.inOrder();  // Tableau trié des valeurs actuelles
    this.root = this.buildTree(sortedValues, 0, sortedValues.length - 1);
  }
}