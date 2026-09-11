// "use strict"

// const Player = (sign) => {
//     this.sign = sign;

// const getSign = () => {
//     return sign;
// }

//     return{
//         getSign
//     }
// }

// const gameBoard = (()=> {
//     const board = ['','','','','','','','',''] 

//     const setField = (index,sign) => {

//         if(index > board.length) return;
//         board[index] = sign;
//     }

//     const getField = (index) => {
//         if(index > board.length) return;
//         return board[index]
//     }
//     const reset = (()=> {

//         for(let i = 0; i < board.length; i++) {
//             board[i] = "";
//         }
//     })
//     return{ setField, getField, reset}


// })()

// const displayController = (()=> {
//         const fieldElements = document.querySelectorAll(".field")
//         const messageElement = document.getElementById("message")
//         const restart = document.getElementById("restart")


//         fieldElements.forEach((field) => 
//             field.addEventListener("click", (e) => {
//                 if(gameController.getIsOver() || e.target.textContent !== "") return;

//                 gameController.playRound(parseInt(e.target.dataset.index));
//                 updateGameboard()
//         }) )

//         restart.addEventListener("click", (e) => {
//             gameBoard.reset();
//             gameController.reset();
//             updateGameboard();
//             setMessageElement("Player X's turn")
//         })

//         const updateGameboard = () => {
//             for(let i = 0; i < fieldElements.length; i++) {
//                 fieldElements[i].textContent = gameBoard.getField(i)
//             }
//         }

//         const setResultMessage = (winner) => {
//             if(winner === "Draw") {
//                 setMessageElement("It's a draw!");
//             } else {
//                 setMessageElement(`Player ${winner} has won!`);
//             }
//         }

//         const setMessageElement = (message) => {
//             messageElement.textContent = message;
//         }

    

//         return {
//             setResultMessage, setMessageElement
//         }        
//     }
// )();



// const gameController = (()=> {

//     const playerX = Player("X");
//     const playerO = Player("O");

//     let round = 1;
//     let gameOver = false;

//     const playRound = (fieldIndex) => {
//         gameBoard.setField(fieldIndex, getCurrentPlayerSign()) 
//             if(checkWinner(fieldIndex)){
//                 displayController.setResultMessage(getCurrentPlayerSign())
//                 gameOver = true;
//                 return;
//             }
//             if(round === 9){
//                     displayController.setResultMessage('Draw')
//                     gameOver = true;
//                     return;
//                 }
//                 round++;
//                 displayController.setMessageElement(`Player ${getCurrentPlayerSign()}'s turn`)

//             }

//             const getCurrentPlayerSign = () => {
//                 return round % 2 === 1 ? playerX.getSign() : playerO.getSign()
//             }
    

//     const checkWinner = (fieldIndex) => {
//         const winConditions = [
//             [0,1,2],
//             [3,4,5],
//             [6,7,8],
//             [0,3,6],
//             [1,4,7],
//             [2,5,8],
//             [0,4,8],
//             [2,4,6]
//         ];

//         return winConditions
//         .filter((combination) => combination.includes(fieldIndex))
//         .some((possibleCombination) => 
//             possibleCombination.every(
//                 (index) => gameBoard.getField(index) === getCurrentPlayerSign()
//             )
//         )
//     }
//         const getIsOver = () => {
//             return gameOver
//         }

//         const reset = () => {
//             round = 1;
//             gameOver = false;

//         }
//         return {playRound,getIsOver,reset}

// })()



// const gameBoard = (()=> {
//     const board = ["","","","","","","","",""];

//     const getBoard = () => board;

//     const setField = (index,sign) => {
//         if(index > board.length) return;
//         board[index] = sign
//     }

//     const getField = (index) => {
//         if(index > board.length) return;
//         return board[index]
//     }

//     const reset = () => {
//         for(let i = 0; i < board.length; i++){
//             board[i] = '';
//         }
//     }

//     return{
//         getBoard,setField,getField,reset
//     }
// })()


// const Player = (sign)=> {
//     this.sign = sign;



//     const getSign = () => {
//         return sign
//     }

//     return{
//         getSign
//     }
// }

// const gameController = (()=> {
//     const playerX = Player('X')
//     const playerO = Player("O")

//     let round = 1;
//     let gameOver = false;

//    const playRound = (fieldIndex) => {
//     gameBoard.setField(fieldIndex, getCurrentPlayerSign())

//     if(checkWinner(fieldIndex)){
//         displayController.setResultMessage(getCurrentPlayerSign())
//         gameOver = true
//         return;
//     }
//     if(round === 9){
//         displayController.setMessageElement('Draw')
//         gameOver = true;
//         return;
//     }
//     round++;
//     displayController.setMessage
//    }
//    const getCurrentPlayerSign = () => {
//     return round % 2 === 1 ? playerX.getSign() : playerO.getSign() 
//    }

// const checkWinner = (fieldIndex) => {
//      const winConditions = [
//             [0,1,2],             
//             [3,4,5],           
//             [6,7,8],           
//             [0,3,6],
//             [1,4,7],
//             [2,5,8],
//             [0,4,8],
//             [2,4,6]
//          ];
//          return winConditions
//          .filter((someCombinations) => someCombinations.includes(fieldIndex))
//         .some((possibleCombinations) => 
//         possibleCombinations.every(
//             (index) => gameBoard.getField(index) === getCurrentPlayerSign()
//         ))
// }

//     const getIsover = () => {
//         return gameOver
//     }

//     const reset = () => {
//         round = 1;
//         gameOver = false;
//     }


//     return{
//         playRound, getIsover, reset
//     }
// })()


// const displayController = (() => {
//     const fieldElements = document.querySelectorAll('.field');
//     const messageElement = document.getElementById('message')
//     const restart = document.getElementById('restart');

//     fieldElements.forEach((field) => 
//     field.addEventListener('click', (e) => {
//         if(gameController.getIsover() || e.target.textContent !== '' ) return
//         gameController.playRound(parseInt(e.target.dataset.index));
//         updateGameboard()
    
//     }))


//     restart.addEventListener("click", (e) => {
//         gameBoard.reset();
//         gameController.reset();
//         updateGameboard();
//         setMessageElement("Player X's turn")
//     })

//     const updateGameboard = () => {
//         for(let i = 0; i < fieldElements.length; i++ ) {
//             fieldElements[i].textContent = gameBoard.getField(i)
//         }
//     }

//     const setResultMessage = (winner) => {
//         if(winner === "Draw"){
//             setMessageElement("Its a draw!")
//         } else {
//             setMessageElement(`Player ${winner} has won!`)
//         }
//     }

//     const setMessageElement = (message) => {
//         messageElement.textContent = message
//     }
    
//     return {
//         setMessageElement,setResultMessage
//     }
// })();



// const gameBoard = (()=>  {
//     const board = ['','','','','','','','','']

//     const getBoard = () => board;

//     const setField  = (sign,index) =>  {
//         if(index > board.length) return
//         board[index] = sign
//     }

//     const getField = (index) => {
//         if(index > board.length) return
//         return board[index]
//     }

//     const reset = () => {
//         for(let i = 0; i < board.length; i++){
//             board[i] = undefined;
//         }
//     }

//     return{
//         getBoard,setField,getField,reset
//     }
// })()


// const Player = (sign) => {
//     this.sign = sign;

//     const getSign = () => sign;

//     return {
//         getSign
//     }
// }

// const gameController = (() => {
//     const playerX = Player("X")
//     const playerO = Player("O")

//     let round = 1;
//     let gameOver = false;

//     const playRound = (fieldIndex) => {
//         gameBoard.setField(getCurrentPlayerSign(),fieldIndex)
//         if(checkWin(fieldIndex)){
//            displayController.setResultMessage(getCurrentPlayerSign())
//             gameOver = true;
//             round = 1;
//         }

//         else if(round == 9){
//            displayController.setResultMessage("Draw")
//             gameOver = true;

//         }

//         round++;
//         displayController.setMessageElement(`Player ${getCurrentPlayerSign()}'s turn`)        
//     }


//     const getCurrentPlayerSign = () => {
//        return round % 2 === 1 ? playerX.getSign() : playerO.getSign();
//     }

//     const restart = () => {
//         gameBoard.reset();
//         gameOver = false;
//         round = 1;
//     }

//     const checkWin = (fieldIndex) => {

//         const winConditions = [
//             [0,1,2],
//             [3,4,5],
//             [6,7,8],
//             [0,3,6],
//             [1,4,7],
//             [2,5,8],
//             [0,4,8],
//             [2,4,6]
//         ]
    
//         return winConditions    
//         .filter((possibleCombinations) => possibleCombinations.includes(fieldIndex) )
//     .some((someCombinations) => someCombinations.every( 
//         (index) => gameBoard.getField(index) === getCurrentPlayerSign()
// ))
// }
//     const getIsOver = () => {
//         return gameOver
//     }

//     return{
//         playRound, getCurrentPlayerSign, restart, getIsOver
//     }

// })()

// const displayController = (()=> {
//     const message = document.getElementById('message')
//     const restart = document.getElementById("restart")
//     const fieldElements = document.querySelectorAll('.field')


//     fieldElements.forEach((field) => 
//         field.addEventListener('click', (e) => {
//             if(gameController.getIsOver() || e.target.textContent != "") return
//             gameController.playRound(parseInt(e.target.dataset.index))
//             updateGameBoard()
            
//         }) 

        
//     )
   

//     const updateGameBoard = () =>  {
//         for(let i = 0; i  < fieldElements.length; i++) {
//                 fieldElements[i].textContent  = gameBoard.getField(i)
//         }
//     }
//     const setResultMessage = (winner) => {
//         if(winner == "Draw"){
//             message.textContent = "It's a  draw!"
//             changeBoard()

//         }
//         else{
//            message.textContent = `Player ${winner} wins!`;
//            changeBoard()
//         }
//     }

    // const changeBoard = () => {
    //     fieldElements.forEach(element => {
    //         element.classList.remove('field')
    //         element.classList.add("gameover")
    //     })
    // }

    // const resetBoard  = () => {
    //     fieldElements.forEach(element => {
    //         element.classList.remove('gameover')
    //         element.classList.add(('field'))
    //     })
    // }

//     const setMessageElement = (mess) => {
//         message.textContent = mess ;    
//     }

//     restart.addEventListener("click", (e) => {
//         gameController.restart()
//         gameBoard.reset()
//         updateGameBoard()
//         setMessageElement(`Player X's turn`)
//     })

//     return { setResultMessage, setMessageElement

//     }
// })()


const gameBoard = (()=> {
    const board = ['','','','','','','','','']

    const getBoard = () => board;

    const getField = (index) => {
        if(index > board.length) return;
        return board[index]
    }
    const setField = (sign,index) => {
        if(index > board.length) return;
        board[index] = sign;
    }

    const reset = () => {
        for(let i = 0; i < board.length; i++){
            board[i] = undefined
        }
    }
    return{
        getBoard,getField,setField,reset
    }
})()



const Player = (sign) => {
    this.sign = sign;

    const getSign = () => sign;
    
    return{
        getSign
    }
}



const gameController = (() => {
    const playerX = Player("X");
    const playerO = Player('O');

    let round = 1;
    let gameOver = false;

    const playRound = (fieldIndex) => {
            gameBoard.setField(getCurrentPlayerSign(),fieldIndex)
        if(checkWin(fieldIndex)){
             displayController.setResultMessage(getCurrentPlayerSign())
            gameOver = true;
            return
      
        }
        else if(round == 9){
            displayController.setResultMessage("Draw") 
            gameOver = true;
              return;
        }
        round++;
        displayController.setMessageElement(`Player ${getCurrentPlayerSign()}'s turn`)
        
    }
    
    const getCurrentPlayerSign = () => {
        return round % 2 === 1 ? playerX.getSign() : playerO.getSign()
    }


   const checkWin = (fieldIndex) => {

        const winConditions = [
            [0,1,2],             
            [3,4,5],            
            [6,7,8],
            [0,3,6],             
            [1,4,7],             
            [2,5,8],             
            [0,4,8],
            [2,4,6]
        ]
    return winConditions
            .filter((possibleCombinations) => possibleCombinations.includes(fieldIndex))
            .some((someCombinations) => someCombinations.every(
                (index) => gameBoard.getField(index) ===  getCurrentPlayerSign()
            ))
    }

    const reset = () => {
        
        round = 1;
        gameOver = false;

    }


   
     
    const isGameOver = () => {
        return gameOver;
    }

    return{
        getCurrentPlayerSign, reset, playRound, isGameOver
    }

})()


const displayController = (() => {
    const fieldElements = document.querySelectorAll('.field');
    const message = document.querySelector("#message")
    const restart = document.getElementById('restart');
    

    
    fieldElements.forEach((field) => 
       field.addEventListener("click", (e) => {
            if(gameController.isGameOver() || e.target.textContent != "") return;
            gameController.playRound(parseInt(e.target.dataset.index))
            updateGameBoard()
        
})
)


    const updateGameBoard = () => {
        for(let i = 0; i < fieldElements.length ; i++){
                fieldElements[i].textContent = gameBoard.getField(i);
        }
    }

      const setMessageElement =  (msg) => {
        message.textContent = msg;
    }

    const setResultMessage = (msg) => {
              changeBoard()
              const message = document.querySelector('#message')
            console.log(message.textContent)
            if(msg == "Draw") {
               message.textContent = "Its a draw"
                
                console.log("Draw")
                

            } else {
                
              
                console.log(`player ${msg} wins!`)
             message.textContent = `Player ${msg} wins!`
               
            }
    }

    const changeBoard = () => {
        fieldElements.forEach(element => {
            element.classList.remove('field')
            element.classList.add("gameover")
        })
    }

    const resetBoard  = () => {
        fieldElements.forEach(element => {
            element.classList.remove('gameover')
            element.classList.add(('field'))
        })
    }


  

   

    restart.addEventListener('click', (e) => {
        gameBoard.reset()
        gameController.reset()
        updateGameBoard()
        resetBoard()
        setMessageElement(`Player X's turn`);
       
     
       
    })

    return{
        setResultMessage,setMessageElement
    }

})()


