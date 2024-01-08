import './Scores.css'

function Scores({
    userScore,
    compScore,
    draw
}){

    return(
        <>
        <div className='scores-container'>
        <h3>You : {userScore}</h3>
        <h3>Computer : {compScore}</h3>
        <h3>Draw : {draw}</h3>
        </div>
        </>
    )
}
export default Scores
