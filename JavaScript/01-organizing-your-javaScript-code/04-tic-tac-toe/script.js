const gameBoard = (function () {
    // La variable est cachée ici (Encapsulation)
    let board = ["", "", "", "", "", "", "", "", ""];

    // On crée une version publique pour lire le tableau sans le modifier directement
    const getBoard = () => board;

    const placeMarker = (index, marker) => {
        // AJOUTE TA LOGIQUE ICI :
        if (board[index] === "") {
            board[index] = marker;
        }
    };

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, placeMarker, resetBoard };
})();

const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return { getName, getMarker };
}

const gameController = (function () {
    const players = [Player("Joueur 1", "X"), Player("Joueur 2", "O")];
    let activePlayer = players[0];
    let gameOver = false;
    let winner = null; // Pour stocker le nom du gagnant

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const playRound = (index) => {
        if (gameOver) return;
        if (gameBoard.getBoard()[index] !== "") return;

        gameBoard.placeMarker(index, activePlayer.getMarker());

        if (checkWin()) {
            gameOver = true;
            winner = activePlayer.getName();
            return;
        }

        // Vérification du Match Nul
        if (gameBoard.getBoard().every(cell => cell !== "")) {
            gameOver = true;
            winner = "Match Nul";
            return;
        }

        switchPlayerTurn();
    };

    const checkWin = () => {
        const board = gameBoard.getBoard();
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winConditions.some(cond => {
            const [a, b, c] = cond;
            return (board[a] !== "" && board[a] === board[b] && board[a] === board[c]);
        });
    };

    const restartGame = () => {
        gameBoard.resetBoard();
        gameOver = false;
        winner = null;
        activePlayer = players[0];
    };

    // On expose les nouvelles méthodes nécessaires pour l'affichage
    return {
        playRound,
        getActivePlayer: () => activePlayer,
        getGameOver: () => gameOver,
        getWinner: () => winner,
        restartGame
    };
})();

const displayController = (function () {
    const boardElement = document.getElementById('game-board');
    const statusElement = document.getElementById('status');
    const restartBtn = document.getElementById('restart-btn');

    const updateDisplay = () => {
        boardElement.innerHTML = "";
        const board = gameBoard.getBoard();

        // Mise à jour du message d'état
        if (gameController.getGameOver()) {
            statusElement.textContent = gameController.getWinner() === "Match Nul"
                ? "Match Nul !"
                : `${gameController.getWinner()} a gagné !`;
        } else {
            statusElement.textContent = `Tour de : ${gameController.getActivePlayer().getName()}`;
        }

        board.forEach((cell, index) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.textContent = cell;
            cellElement.addEventListener("click", () => {
                gameController.playRound(index);
                updateDisplay();
            });
            boardElement.appendChild(cellElement);
        });
    };

    // Écouteur pour le bouton Restart
    restartBtn.addEventListener("click", () => {
        gameController.restartGame();
        updateDisplay();
    });

    return { updateDisplay };
})();

displayController.updateDisplay();