import'./InputForm.css'

function InputForm({
    label="default",
    inputValue,
    options=["a","b","c","d"],
    handleInput,
    currency,
    handleCurrency,
    readonly


}){

    return(
        <>
        <div className='container'>
            <div className='utility'>
                <label>{label} : {currency}</label>
                <label>Currency</label>
            </div>
            <div className='utility'>
                <input onInput={(e)=>{handleInput(e)} } value={inputValue} readOnly={readonly}/>
                <select onChange={(e)=>{handleCurrency(e.target.value)}} value={currency}>
                {options.map((val)=>(<option key={val} value={val}>{val}</option>))}
                </select>
            </div>
        </div>
        </>
    )
}

export default InputForm