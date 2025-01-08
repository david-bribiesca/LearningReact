import './App.css'
import { useState } from 'react'
import { Arrow } from '/components/Arrow'
import { Square } from '/components/Square';

const checkWinner = (newBoard) => {
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
