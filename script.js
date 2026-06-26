
const gameBoard = () => {
    board = [];
    for(let r = 0; r < 3; r++){
        board[r] = [];
    for(let c = 0; c < 3; c++){
        board[r].push('0')
    }
    
    }

    

    const getBoard = () => board;
    return{getBoard}
}


// function GameController(
// ) {
//   const board = gameBoard();

//   const players = [
//     {
//       name: 'x',
//       token: 1,
//       color: 'red'
//     },
//     {
//       name: 'o',
//       token: 2,
//       color: 'blue'
//     },
//   ];

//   let activePlayer = players[0];
  
//   const switchPlayerTurn = () => {
//     activePlayer = activePlayer === players[0] ? players[1] : players[0];
//   };
//   const getActivePlayer = () => activePlayer;


// const playRound = () => {
//     switchPlayerTurn();
//     getActivePlayer();
//     console.log(activePlayer)
// }
// playRound()
// playRound()
// playRound()
// }

// GameController()






function GameController() {
    board = gameBoard().getBoard

    const players = [
        {
            name: "X",
            marker: "X"
        },
        {
            name: "O",
            marker: "O"
        }
    ]

    let activePlayer = players[0];
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const getActivePlayer = () => activePlayer;

const playRound = () => {
    getActivePlayer();
    console.log(`${getActivePlayer().name}'s turn..`)






    switchPlayerTurn()
   

}

playRound()
playRound()

}


GameController()

