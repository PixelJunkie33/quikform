import React, { useState } from "react";

export default function Signupform({onSignup}) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup({fullName, email, phone});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={"Jane Doe"} onChange={(e) => setFullName(e.target.value)} />
            <label htmlFor="email">Email Address </label>
            <input type="email" id="name" value={"JaneDoe@email.com"} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="name" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button type="submit">Sign Up</button>
        </form>
    )
}