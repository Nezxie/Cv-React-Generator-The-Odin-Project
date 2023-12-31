function CustomInput({type, value, setValue, date = false, longText = false}){
    let field = <input type="text" id={type.replace(/\s/g, '')} name={type.replace(/\s/g, '')}>{value}</input>
    if(date){
        field = <input type="date" id={type.replace(/\s/g, '')} name={type.replace(/\s/g, '')}>{value}</input>    }
    if(longText){
       field = <textarea id={type.replace(/\s/g, '')} name={type.replace(/\s/g, '')} rows="4" cols="50">{value}</textarea>
    }
    return (
        <div className = 'inputBox'>
             <label htmlFor={type.replace(/\s/g, '')}>{type}</label>
            {field}
        </div>
    );
}
export default CustomInput;