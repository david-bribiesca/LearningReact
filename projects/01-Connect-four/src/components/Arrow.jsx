
export const Arrow = ({index, updateBoard}) => {
    const handleClick = () => {
      updateBoard({index})
    }
    return(
      <img src="public\arrow.png" onClick={handleClick} className='arrow'/>
    )
}