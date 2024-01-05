import'./AddTask.css'

function AddTask({
    handleButton,
    inputRef
}){

    return(<>
    <div className="inputBox">
        <form onSubmit={(e)=>{handleButton(e)}}>
            <input type="text" className="textInput" placeholder='Click to Add Task' ref={inputRef}/>
            <button type='submit'>Add task</button>
        </form>
    </div>
    </>
    )
}
export default AddTask