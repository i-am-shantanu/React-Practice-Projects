import './ButtonRow.css'

function ButtonRow({
    buttonValue=[],
    disValue,
    handleClick
}){

    return(
        <>
        <div className='utility'>
          <input type="button" value={buttonValue[0]} className='input' onClick={(e)=>{handleClick(e)}}/>
          <input type="button" value={buttonValue[1]} className='input' onClick={(e)=>{handleClick(e)}}/>
          <input type="button" value={buttonValue[2]} className='input' onClick={(e)=>{handleClick(e)}}/>
          <input type="button" value={buttonValue[3]} className='input' onClick={(e)=>{handleClick(e)}}/>
        </div>
        </>
    )
}
export default ButtonRow