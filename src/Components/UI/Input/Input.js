import React from 'react';
import classes from './Input.css'

const input = (props)=>{
    let inputEl=null;
    switch (props.inputtype) {
        case 'input':inputEl=<input className={classes.InputEl} {...props}/>
            
            break;
        case 'textarea':inputEl=<textarea className={classes.InputEl} {...props}/>
            
            break;
        default:inputEl=<input className={classes.InputEl} {...props}/>
            break;
    }

    return(
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputEl}
        </div>
    )
}

export default input 