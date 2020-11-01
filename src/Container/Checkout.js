import React, { Component } from 'react'
import {connect} from 'react-redux'

import CheckoutSummary from '../Components/Burger/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData'

import {Route}  from 'react-router-dom'
class Checkout extends Component{

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
                ingredients={this.props.ings}
                CheckOutCancel={this.checkOutCancelHandler}
                CheckOutContinue={this.checkOutContineHandler}/>
                <Route path={ this.props.match.path  +'/contact-data'} 
                 component={ContactData} />
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        ings:state.ingredients,
    }
}

export default connect(mapStateToProps)(Checkout);