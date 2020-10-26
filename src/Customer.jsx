import React from 'react'
import './style.css'
import AvatarCustomer from './AvatarCustomer'

const Customer = ({customerItem}) =>{
    const {name, lastname, age, occupation} = customerItem
    console.log(name);
    return (
    <div className="customer-component">        
        <AvatarCustomer/>
        <h2>{`${name}`}</h2>          
            <p className="attr-client">{`Lastname: ${lastname}`}</p>
            <p className="attr-client">{`Age: ${age} age`}</p>
            <p className="attr-client">{`Occupation: ${occupation}`}</p>
    </div>)
}

export default Customer