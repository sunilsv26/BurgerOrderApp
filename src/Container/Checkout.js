import React, { Component } from 'react'
import CheckoutSummary from '../Components/Burger/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData'

import {Route}  from 'react-router-dom'
class Checkout extends Component{
    state={
        ingredients:{
            salad:1,
            meat:1,
            bacon:1,
            cheese:1
        },
        totalPrice:0
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        console.log(query.entries());
        let price = 0
        for(let param of query.entries()){
            if(param[0]==='totalPrice'){
                price=param[1]
                
            }
            else{
                ingredients[param[0]]=+param[1]
            }
            console.log(param);
        }

        this.setState({ingredients:ingredients,totalPrice:price})
        
    }

    checkOutCancelHandler=()=>{
        this.props.history.goBack()
    }

    checkOutContineHandler=()=>{
        this.props.history.replace('/checkout/contact-data')
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                CheckOutCancel={this.checkOutCancelHandler}
                CheckOutContinue={this.checkOutContineHandler}/>
                <Route path={ this.props.match.path  +'/contact-data'} render={(props)=><ContactData {...props} ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}/>} />
            </div>
        )
    }
}


export default Checkout;