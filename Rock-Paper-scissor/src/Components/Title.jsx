import './Title.css'

function Title({
    handleclick,
    handleNext,
    
}){

    return(
        <>
        <div className='title-container'>
        <div className='tiltle-text'>
            <h1>Welcome to Rock, Paper and Scissors Game</h1>
        </div>
        <div className='Buttons'>
            <button onClick={(e)=>{handleclick(e);}} >Rock</button>
            <button onClick={(e)=>{handleclick(e);}} >Paper</button>
            <button onClick={(e)=>{handleclick(e);}} >Scissors</button>
            <button className='yellow' style={{backgroundColor:'orange'}} onClick={handleNext}>Next</button>
        </div>
        </div>
        </>
    )
}

export default Title