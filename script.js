

// const gameboard = () => {
//     const board = [];
//     const rows = 3;
//     const cols = 3;

//     for(let i = 0; i < rows; i++){
//         board[i] = []
//         for(let j = 0; j < cols; j++){
//             board[i].push(Cell())
//         }
//     }
//     console.table(board)

//     const getboard = () => board;

//     const dropMark = (row, player) => {
//         const availableCells = board
//         .filter((row) => row[column].getValue === '')
//         .map((row)=> row[column]);
//         console.log(availableCells)
//         if(!availableCells.length) return;

//         const availableSquare = 
//     )
//     }
//     }

//     const printboard = () => {
//         const boardWithCellValues = board.map((row)=> row.map((cell) => cell.getValue)
//     )
//     console.log(boardWithCellValues)
//     }
//     return {getboard,dropMark,printboard}


// }

// function Cell() {
//     let value = 0;


//     const getValue = () => value;

//     const dropToken = (player) => {
//         value = player;
//     }


//     return {
//         getValue,
//         dropToken,
//     }
// }


// function GameController(
// playerOneName = "X",
// playerTwoName = "O"
// ){

//     const board = gameboard();

//     const players = [
//         {
//             name: playerOneName,
//             mark: "X",
//             color:"red"
//         },
//         {
//             name: playerTwoName,
//             mark: "O",
//             color: "blue"
//         }
//     ]

//     let activePlayer = players[0]

//     const switchPlayer = () => {
//         activePlayer = activePlayer === players[0] ? players[1] : players[0]
//         console.log(`Active player is ${getActivePlayer().color}}`)
//     }

//     const getActivePlayer = () => activePlayer;

//     const printNewRound = () => {
//         console.log(`${getActivePlayer().name}'s turn.`);
//     }

//     const playRound = (column) => {
       


//         switchPlayer();
//         printNewRound();
//     }
//     return{
//         playRound,getActivePlayer, getboard: board.getboard,switchPlayer
//     }



// }

// function screenController() {
//     const game = GameController();
//     // game.playRound()
//     // game.getboard()
    
//     game.printboard()
// }

// screenController()




const gameBoard = () => {
    let board = [];
    let rows = 3;
    let cols = 3;

    for(let i = 0; i < rows; i++){
        board[i] = []
        for(let j = 0; j < cols; j++){
            board[i].push(0)
        }
    }


    const getBoard = () => board ;
    
    const printBoard = () => {
        const boardWithCellValues = board.map( (row)=> row.map((cell) => cell.getValue))
    console.log(boardWithCellValues)
    }

    const dropMark = () => {

    }

    printBoard()
  
    return{getBoard, printBoard}
}




function Cell() {
    let value = 0;
   
    const getValue = () => value;

    const addMarker = (player) => {
        let value = player
    }

    return{
        getValue,addMarker
    }
}

function GameController(

    
    playerOneName = 'x',
    playerTwoName = 'o'
) {
    const board = gameBoard()
    
    const players = [
        {
            player : playerOneName,
            marker: 'x'
           
        },
        {
            player : playerTwoName,
            marker:'o'
           
        }


    ]
   
    let activePlayer = players[0]
    
    
    const switchPlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    
    console.log(`Active player is ${activePlayer.player}`)

    }
    
   
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(board)
        console.log(`${getActivePlayer().player}'s turn.`)
    }

   printNewRound()

    const playRound = (row,column) => {

        board.addMarker(row[column], getActivePlayer().token)
    }
function getWinner(board){
        function checkThree(a,b,c){
            if(a !== '' && a === b && b === c){
                return a
            }
            return null
        }

        for(let row = 0; row < 3; row++){
            const winner = checkThree(board[row][0], board[row][1], board[row][2]);
            if (winner) return winner;
            
        }
        for(let col = 0; col < 3; col++){
            const winner = checkThree(board[0][col],board[1][col], board[2][col])
        }
        const winnerDiag1 = checkThree(board[0][0], board[1][1], board[2][2]);
        if(winnerDiag1) return winnerDiag1;

        const winnerDiag2 = checkThree(board[0][2],board[1][1],board[2],[0])
        if(winnerDiag2) return winnerDiag2;


        return null;
    
}   

const board2 = [
    ['O', 'X', 'X'],
    ['', 'O', ''],
    ['O', '', 'O']
]

console.log(getWinner(board2))


return{
        getActivePlayer,switchPlayer, 
    }
}

function isBoardFull(board){
   return board.every(row => row.every(cell => cell !== ''))
}

function evaluate(board){
    const winner = getWinner(board);
    if(winner === 'O') return 10;
    if(winner === 'X') return -10;
    return 0;
}
function minimax(board,isMaximazing){

    const winner = getWinner(board);
    if(winner !== null) return evaluate(board);
    if(isBoardFull(board)){return 0;
}

if(isMaximazing){
    let bestScore = -Infinity;
    for(let r = 0; r < 3; r++){
        for(let c = 0; c < 3; c++){
            if(board[r][c]=== ''){
                board[r][c] = 'O';
                let score = minimax(board,false);
                board[r][c] = '';
                bestScore = Math.max(best, score)
            }
        }
    }
    return bestScore
} else {
    let bestScore =  Infinity;
    for(let r = 0; r < 3; r++){
        for(let c = 0; c < 3; c++){
            if(board[r][c]=== ''){
                board[r][c] = 'X';
                let score = minimax(board,true);
                board[r][c] = '';
                bestScore = Math.min(best,score)
            }
        }
    }
 return bestScore
}

function getBestMove(board){
    let bestScore = -Infinity;
    let move = { row: -1, col: -1};
    for( let r = 0; r < 3; r++){
        for(let c = 0; c < 3; c++){
            if(board[r][c] === ''){
                board[r][c] = 'O';
                let score = minimax(board, false);
                board[r][c] = '';
                if(score > bestScore){
                    bestScore = score;
                    move = { row: r, col: c}
                }
            }
        }
     return move;   
    }
}




}
GameController()
