import React, { useState } from 'react';
import './index.css';
import './App.css';
import './SideBar.css';
import './formSignUp.css';
import ContainerBox from './sidebarComponents';
import Signupform from './Form_Signup';


function App() {
  const [step, setStep] = useState(1);
  const handleSignup = (formData) =>{
    console.log(formData);
    setStep(2);
  }
  return (
    <>
    
    <div>
      <ContainerBox step={step}/>
    </div>

    <div>
       <h1 className='SignupForm_Text'>Personal Information</h1>
       <h3 className='SignupForm_TextSub'>Please enter your name, email address, and phone number.</h3>
       <Signupform onSignup={handleSignup} step={step}/>
        
    </div>
    </>
  );
}

export default App;
