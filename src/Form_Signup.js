import React, { useState } from "react";
import "./formSignUp.css";

//we pass the Step state from the App.js file to the Signupform component

export default function Signupform({onSignup , step}) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

//we create a function that will handle the form submission   
//the method is called when the form is submitted
//we pass the form data to the onSignup function
//preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup({fullName, email, phone});
    };

    return (
        <div className="SignupForm">
        <form onSubmit={handleSubmit}>
        <label className="Label" htmlFor="name">Name</label>
    <input className="Input"
        type="text" 
        id="name"
        value={fullName} 
        onChange={(e) => setFullName(e.target.value)} 
    />

        <label className="Label" htmlFor="email">Email Address </label>
        <input className="Input"
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            />

        <label className="Label" htmlFor="phone">Phone Number</label>
        <input className="Input"
            type="text" 
            id="phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            />

        <button className="ButtonSubmit" type="submit" disabled={step === 2}>
            Sign Up
        </button>
    </form>
    </div>
    )
}