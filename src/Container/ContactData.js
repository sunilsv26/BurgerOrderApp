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
                }
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
                }
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
                }
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
                }
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
                }
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'fastest', displayValue:'Fastest'},
                        {value:'cheapest', displayValue:'Cheapest'}
                    ]
                },
                value:''
            }
        }
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
       console.log(event.target.value);
       const updatedForm = {...this.state.orderForm}
       const updatedFormEl = {...updatedForm[key]};
       updatedFormEl.value = event.target.value;
       updatedForm[key]=updatedFormEl
       this.setState({orderForm:updatedForm})
       this.formValidationHandler(updatedFormEl.value,updatedFormEl.validation)
   }

   formValidationHandler=(value,rule)=>{
       let isValid = false;
       if(rule.isRequired){
           isValid= value.trim() !=='';
       }
       console.log(isValid);
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
                     changed={(event)=>this.inputChangedHandler(event,formEl.id)}/>
                     )}
                    <button>PLACE ORDER</button>
                </form>
            </div>
        )
    }
}

export default ContactData