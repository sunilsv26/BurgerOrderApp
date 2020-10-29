import React, { Component } from 'react'

import classes from './ContactData.css';
import axiosOrder from '../axios-order';
import Input from '../Components/UI/Input/Input'


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
                isvalidate:true,
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
                isvalidate:true,
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
                isvalidate:true,
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
                isvalidate:true,
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
                isvalidate:true,
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
                value:'',
                validation:{
                    isRequired:false,
                },
                isvalidate:false,
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
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
          };
          axiosOrder
            .post("/orders.json", order)
            .then((response) => this.props.history.push('/burger'))
            .catch((error) => this.setState({ loading: false }));
    }

   inputChangedHandler=(event,key)=>{
       const updatedForm = {...this.state.orderForm}
       const updatedFormEl = {...updatedForm[key]};
       updatedFormEl.value = event.target.value;
       updatedFormEl.touched=true;
       updatedFormEl.valid = this.formValidationHandler(updatedFormEl.value,updatedFormEl.validation)
       updatedForm[key]=updatedFormEl
       let  formIsValid = true;
       for(let key in updatedForm){
           formIsValid = updatedForm[key].valid && formIsValid
       }
       console.log(formIsValid);
       this.setState({orderForm:updatedForm ,formIsValid:formIsValid})   
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
                     invalid={!formEl.Config.valid && formEl.Config.isvalidate}
                     touched={formEl.Config.touched}/>
                     )}
                    <button>PLACE ORDER</button>
                </form>
            </div>
        )
    }
}

export default ContactData