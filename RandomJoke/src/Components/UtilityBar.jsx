import './UtilityBar.css'

function UtilityBar(
    {
    getNewJoke,
    ClearAllJokes
    }
){

    return(
        <>
     <div className='utilitybox'>
        <button onClick={getNewJoke}>Get a New Joke</button>
        <button onClick={ClearAllJokes}>Clear All Jokes</button>
      </div>
        </>
    )
}
export default UtilityBar