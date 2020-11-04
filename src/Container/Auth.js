import React, { Component } from "react";

import classes from "./Auth.css";
import Input from '../Components/UI/Input/Input';


class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email Address",
        },
        value: "",
        validation: {
          isRequired: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          isRequired: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };
  inputChangedHandler=(event,key)=>{
    const updatedControl = {...this.state.controls}
    const updatedFormEl = {...updatedControl[key]};
    updatedFormEl.value = event.target.value;
    updatedFormEl.touched=true;
    updatedFormEl.valid = this.formValidationHandler(updatedFormEl.value,updatedFormEl.validation)
    updatedControl[key]=updatedFormEl
    let  formValid = true;
    for(let key in updatedControl){
        formValid = updatedControl[key].valid && formValid
    }
    this.setState({controls:updatedControl ,formIsvalid:formValid})   
}

formValidationHandler=(value,rule)=>{
    let isValid = true;
    if(rule.isRequired){
        isValid= value.trim() !=='' && isValid;
    }
    if(rule.minLength){
     isValid= value.trim().length=== rule.minLength && isValid;
    }
    if(rule.isEmail){
        const pattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        isValid= pattern.test(value)&& isValid;
       }
    return isValid
}
  render() {
      let controlsArray = [];
      for (let key in this.state.controls){
          controlsArray.push({id:key,
            Config:this.state.controls[key]})
      }
      
    return (
      <div className={classes.Controls}>
        <form>
            {controlsArray.map(formEl=> 
                     <Input 
                     key={formEl.id}
                     elementType={formEl.Config.elementType} 
                     elementConfig={formEl.Config.elementConfig}
                     value={formEl.Config.value}
                     changed={(event)=>this.inputChangedHandler(event,formEl.id)}
                     invalid={!formEl.Config.valid}
                     touched={formEl.Config.touched}/>
                     )}
            <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default Auth;
