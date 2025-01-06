import './App.css'
import { useState } from 'react'

const Square = ({children}) => {
  return(
    <div>
      {children}
    </div>
  )
}

const Arrow = ({index, updateBoard}) => {
  const handleClick = () => {
    updateBoard({index})
  }
  return(
    <img src="public\arrow.png" onClick={handleClick} className='arrow'/>
  )
}

const TURNS = {
  a: "🔴",
  b: "🔵",
};


const checkWinner = (newBoard) => {
  const winningCombinations = [
    { step: 1, limit: 7 },
    { step: 7, limit: 42 },
    { step: 6, limit: 42 },
    { step: 8, limit: 42 }, 
  ];

  for (let i = 0; i < 42; i++) {
    if (!newBoard[i]) continue

    for (const { step, limit } of winningCombinations) {
      let count = 1

      for (let j = 1; j < 4; j++) {
        const nextIndex = i + step * j
        if (nextIndex >= limit || nextIndex < 0) break
        if (newBoard[nextIndex] === newBoard[i]) {
          count++
        } else {
          break
        }
        if (count === 4) {
          return newBoard[i]
        }
      }
    }
  }

  return null
};


function App() {

  const [board, setBoard] = useState(Array(42).fill(null))
  const [turn, setTurn] = useState(TURNS.a)
  const [winner, setWinner] = useState(null)
  const arrows = Array(7).fill(null)

  const updateBoard = ({index}) => {
    if(winner) return
    let newBoard = board.slice()
    for(let i = index + 35 ; i>=0 ; i -= 7){
      if(!newBoard[i]){
        newBoard[i] = turn
        setBoard(newBoard)
        let newWinner = checkWinner(newBoard)
        setWinner(newWinner)
        let newTurn = turn == TURNS.a? TURNS.b: TURNS.a;
        setTurn(newTurn)
        console.log(newWinner)
        break
      }
    }
  }

  return (
    <>
      <header>
        <h1>Connect 4</h1>
      </header>
      <section className='arrows'>
        {arrows.map((_, index) =>{
          return(
            <Arrow key={index} index={index} updateBoard={updateBoard}/>
          )
        })}
      </section>
      <section className="board">
        {board.map((_, index) =>{
          return(
            <Square key={index} index={index} >
              {board[index]}
            </Square>
          )
        })}
      </section>
    </>
  )
}

export default App
