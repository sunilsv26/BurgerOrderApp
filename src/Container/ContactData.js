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
                value:''
            },
            town:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Town'
                },
                value:''
            },
            zipcode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP CODE'
                },
                value:''
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your E-mail'
                },
                value:''
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Country'
                },
                value:''
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
        const order = {
            adress:this.state.contactData,
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
                <form>
                     {formDataArrray.map(formEl=> 
                     <Input 
                     key={formEl.id}
                     elementType={formEl.Config.elementType} 
                     elementConfig={formEl.Config.elementConfig}
                     value={formEl.Config.value}
                     changed={(event)=>this.inputChangedHandler(event,formEl.id)}/>
                     )}
                    <button onClick={this.placeOrderHAndler}>PLACE ORDER</button>
                </form>
            </div>
        )
    }
}

export default ContactData