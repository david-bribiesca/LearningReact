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
  const handleClick = ({index}) => {
    console.log({index})
  }
  return(
    <img src="public\arrow.png" onClick={handleClick}/>
  )
}


function App() {

  const [board, setBoard] = useState(Array(42).fill(null))
  const arrows = Array(7).fill(null)

  return (
    <>
      <header>
        <h1>Connect 4</h1>

      </header>
      <section className='arrows'>
        {arrows.map((_, index) =>{
          return(
            <Arrow key={index} />
          )
        })}
      </section>
      <section className="board">
        {board.map((_, index) =>{
          return(
            <Square key={index} index={index}/>
          )
        })}
      </section>
    </>
  )
}

export default App
