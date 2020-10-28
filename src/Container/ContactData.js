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
                        {value:'fastest', displyValue:'Fastest'}
                        {value:'cheapest', displyValue:'Cheapest'}]
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

   

    render(){
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Details</h4>
                <form>
                    <Input elementType='' elementConfig='...'  value='....'/>
                    <Input inputtype='input' type='email' placeholder='Email' name= 'email' />
                    <Input inputtype='input' type='text' placeholder='Address' name= 'addrss' />
                    <button onClick={this.placeOrderHAndler}>PLACE ORDER</button>
                </form>
            </div>
        )
    }
}

export default ContactData