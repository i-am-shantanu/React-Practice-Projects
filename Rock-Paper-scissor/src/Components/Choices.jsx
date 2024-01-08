import './choices.css'

function Choices({

    usersChoice,
    compChoice
}){

    

    return(
        <>
        <div className='choices-container' >
            <h2>Your Choice : {usersChoice}</h2>
            <h2>Computer's Choice : {compChoice}</h2>
        </div>
        </>
    )
}

export default Choices