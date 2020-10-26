import React, { Component } from 'react'
import classes from './ContactData.css'

class ContactData extends Component{
    state={
        contactData:{
            name:'',
            email:'',
            address:{
                village:'',
                pincode:''
            }
        }
    }

    componentDidUpdate(){
        console.log(this.props);
    }
    render(){
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Details</h4>
                <form>
                    <input type='text' placeholder='Name' name= 'name' />
                    <input type='email' placeholder='Email' name= 'email' />
                    <input type='text' placeholder='Address' name= 'addrss' />
                    <button>PLACE ORDER</button>
                </form>
            </div>
        )
    }
}

export default ContactData