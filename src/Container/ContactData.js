import React, { Component } from 'react'
import {connect} from 'react-redux'
import classes from './ContactData.css';
import axiosOrder from '../axios-order';
import Input from '../Components/UI/Input/Input';
import * as actionCreater from '../store/actions/index';
import withErrorHandler from '../Components/hoc/withErrorHandler/withErrorHandler'


class ContactData extends Component{
    state={
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    isRequired:true,
                },
                valid:false,
                touched:false,
            },
            town:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Town'
                },
                value:'',
                validation:{
                    isRequired:true,
                },
                valid:false,
                touched:false,
            },
            zipcode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP CODE'
                },
                value:'',
                validation:{
                    isRequired:true,
                    length:6,
                },
                valid:false,
                touched:false,
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your E-mail'
                },
                value:'',
                validation:{
                    isRequired:true,
                },
                valid:false,
                touched:false,
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Country'
                },
                value:'',
                validation:{
                    isRequired:true,
                },
                valid:false,
                touched:false,
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'fastest', displayValue:'Fastest'},
                        {value:'cheapest', displayValue:'Cheapest'}
                    ]
                },
                value:'cheapest',
                validation:{},
                valid:true
            }
        },
        formIsvalid:false,
    }

    placeOrderHAndler=(event)=>{
        event.preventDefault();
        const orderForm = {};
        for(let key in this.state.orderForm){
            orderForm[key]= this.state.orderForm[key].value
        }
        const order = {
            adress:orderForm,
            ingredients: this.props.ings,
            totalPrice: this.props.price,
          };
        this.props.onPurchaseBurger(this.props.token,order);
        console.log(this.props.token);
    }

   inputChangedHandler=(event,key)=>{
       const updatedForm = {...this.state.orderForm}
       const updatedFormEl = {...updatedForm[key]};
       updatedFormEl.value = event.target.value;
       updatedFormEl.touched=true;
       updatedFormEl.valid = this.formValidationHandler(updatedFormEl.value,updatedFormEl.validation)
       updatedForm[key]=updatedFormEl
       let  formValid = true;
       for(let key in updatedForm){
           formValid = updatedForm[key].valid && formValid
       }
       console.log(formValid);
       this.setState({orderForm:updatedForm ,formIsvalid:formValid})   
   }

   formValidationHandler=(value,rule)=>{
       let isValid = true;
       if(rule.isRequired){
           isValid= value.trim() !=='' && isValid;
       }
       if(rule.length){
        isValid= value.trim().length=== rule.length && isValid;
       }
       return isValid
   }

    render(){
        let formDataArrray = [];
        for(let key in this.state.orderForm){
            formDataArrray.push({id:key,
            Config:this.state.orderForm[key]})
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Details</h4>
                <form onSubmit={this.placeOrderHAndler}>
                     {formDataArrray.map(formEl=> 
                     <Input 
                     key={formEl.id}
                     elementType={formEl.Config.elementType} 
                     elementConfig={formEl.Config.elementConfig}
                     value={formEl.Config.value}
                     changed={(event)=>this.inputChangedHandler(event,formEl.id)}
                     invalid={!formEl.Config.valid}
                     touched={formEl.Config.touched}/>
                     )}
                    <button disabled={!this.state.formIsvalid}>PLACE ORDER</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        loading:state.loading,
        token:state.auth.tokenId,
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onPurchaseBurger:(token,orderData)=> dispatch(actionCreater.purchaseBurger(token,orderData))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(ContactData,axiosOrder));