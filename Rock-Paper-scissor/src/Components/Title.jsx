import './Title.css'

function Title({
    handleclick,
    handleNext,
    disable
    
}){

    return(
        <>
        <div className='title-container'>
        <div className='tiltle-text'>
            <h1>Welcome to Rock, Paper and Scissors Game</h1>
        </div>
        <div className='Buttons'>
            <button onClick={(e)=>{handleclick(e);}} disabled={disable} >Rock</button>
            <button onClick={(e)=>{handleclick(e);}}  disabled={disable}>Paper</button>
            <button onClick={(e)=>{handleclick(e);}}  disabled={disable}>Scissors</button>
            <button className='yellow' style={{backgroundColor:'orange'}} onClick={handleNext}>Next</button>
        </div>
        </div>
        </>
    )
}

export default Title