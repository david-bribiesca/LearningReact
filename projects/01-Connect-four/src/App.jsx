import './App.css'
import { useState } from 'react'

const Square = ({children, index}) => {
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
    <img src="public\arrow.png" onClick={handleClick}/>
  )
}


function App() {

  const [board, setBoard] = useState(Array(42).fill(null))
  const arrows = Array(7).fill(null)

  const updateBoard = ({index}) => {
    let newBoard = board.slice()
    console.log(newBoard)

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
