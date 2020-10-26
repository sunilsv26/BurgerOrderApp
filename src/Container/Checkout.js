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
        }
    }

    componentDidMount(){
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        console.log(this.props.match.path);
        const ingredients = {};
        for(let param of query.entries()){
            ingredients[param[0]]=+param[1]
        }

        this.setState({ingredients:ingredients})
        
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
                <Route path={ this.props.match.path  +'/contact-data'} component={ContactData} />
            </div>
        )
    }
}


export default Checkout;