import React from 'react';
import classes from './Button.css'
const button =(props)=>{
return <button className={[classes.Button,props.btnType].join(' ')}>{props.children}</button>
}

export default button