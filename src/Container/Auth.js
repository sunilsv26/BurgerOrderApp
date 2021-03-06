import React, { Component } from "react";
import { connect} from "react-redux";
import {Redirect}  from 'react-router-dom'

import classes from "./Auth.css";
import Input from "../Components/UI/Input/Input";
import * as actions from "../store/actions/index";
import Spinner from '../Components/UI/Spinner/Spinner'

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
    isSignUp: false,
  };
  inputChangedHandler = (event, key) => {
    const updatedControl = { ...this.state.controls };
    const updatedFormEl = { ...updatedControl[key] };
    updatedFormEl.value = event.target.value;
    updatedFormEl.touched = true;
    updatedFormEl.valid = this.formValidationHandler(
      updatedFormEl.value,
      updatedFormEl.validation
    );
    updatedControl[key] = updatedFormEl;
    this.setState({ controls: updatedControl });
  };

  componentDidMount(){
    if(!this.props.burgerBuilding && this.props.authRedirectPath!=='/burger'){
      this.props.onSetAuthRedirectPath()
    }
  }

  formValidationHandler = (value, rule) => {
    let isValid = true;
    if (rule.isRequired) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rule.minLength) {
      isValid = value.trim().length >= rule.minLength && isValid;
    }
    if (rule.isEmail) {
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  };

  submitHandler = (event) => {
    event.preventDefault();
    let eam = this.state.controls.email.value;
    let pass = this.state.controls.password.value;
    let isSignUp = this.state.isSignUp;
    this.props.onSubmit(eam, pass, isSignUp);
  };

  swithSign = () => {
    this.setState((prevState) => {
      return {
        isSignUp: !prevState.isSignUp,
      };
    });
  };
  render() {
    let controlsArray = [];
    for (let key in this.state.controls) {
      controlsArray.push({ id: key, Config: this.state.controls[key] });
    }

    let form = (
      <form onSubmit={(event) => event.preventDefault()}>
        {controlsArray.map((formEl) => (
          <Input
            key={formEl.id}
            elementType={formEl.Config.elementType}
            elementConfig={formEl.Config.elementConfig}
            value={formEl.Config.value}
            changed={(event) => this.inputChangedHandler(event, formEl.id)}
            invalid={!formEl.Config.valid}
            touched={formEl.Config.touched}
          />
        ))}
        <button onClick={this.submitHandler}>SUBMIT</button>
        <br />
        <button onClick={this.swithSign} className={classes.Sign}>
          Switch to {this.state.isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </form>
    );

    if(this.props.loading){
      form = <Spinner />
    }

    let errMsg = null;
    if(this.props.error){
    errMsg = <p>{this.props.error.message}</p>
    }
    
    let logRedirect = null;
    if(this.props.isLogin){
      logRedirect= <Redirect to={this.props.authRedirectPath}/>
    }
    return <div className={classes.Controls}>
      {logRedirect}
      {form}
      {errMsg}
    </div>;
  }
}

const mapStateToProps = state=>{
  return {
    loading:state.auth.loading,
    error:state.auth.error,
    isLogin:state.auth.tokenId,
    authRedirectPath:state.auth.authRedirectPath,
    burgerBuilding:state.burgerBuilder.building,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath:()=>dispatch(actions.setAuthRediectPath('/burger'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
