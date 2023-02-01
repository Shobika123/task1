import React from 'react';
import Home from './Home';

//import "./Display.css"



const Display = () => {

    const submitHandler=()=>{
        <Home/>
    }
 
  return (
    <><>
          <div>
              <button >Cancel</button>
              <button onSubmit={submitHandler}>send</button>

          </div>
              <div>
                  <h3>COUNTRY</h3>

                  <label> Select Country </label>
                  <input type="text"></input>
    
              
      
              <h3>USER TYPE</h3>
              <input type="radio"></input>Driver
              <input type="radio"></input>Broker & Driver
              </div>

          <div>
              <h3>Personal Details</h3>
          </div><div>
              <label>FIRST NAME</label>
              <input type="text"></input>
              <label>MIDDLE NAME </label>
              <input type="text"></input>
              <label>LAST NAME </label>
              <input type="text"></input>
              
          </div>
          <div>
          <label>DOB</label>
          <input type="numbers"></input>
          <label>mobile number</label>
          <input type="numbers"></input>
          <label>Nationality</label>
          <input type="text"></input>
          </div>
          <div>
            <h3>Present Address</h3>
            <label>Street Name</label>
            <input type="text"></input>
            <label>Country</label>
            <input type="text"></input>
            <label>City</label>
            <input type="text"></input>
            <label>Pin Code</label>
            <input type="numbers"></input>
          </div>
          <div>
            <h3>Employment Details</h3>
            <label>Work Status</label>
            <input type="text">
            </input>
            <label>Professional level</label>
            <input type="text"></input>
            <label>Employer name</label>
            <input type="text"></input>
            <label>Address</label>
            <input type="text"></input>
            <br/>
            <label>Salary Range</label>
            <input type="text"></input>
          </div>
          <div>
            <h3>Proof of Identity</h3>
            <label>identification type</label>
            <input type="text"></input>
            <label>Identification No</label>
            <input type="number"></input>
            <label>issued date</label>
            <input type="numbers"></input>
            </div>
            <div>
                <h3>Additional Details</h3>
                <label>Are You A US Green Card Holder</label>
                <input type="radio"></input>yes
              <input type="radio"></input>no
              <br/>
              <label>Are You A US Tax Payer</label>
                <input type="radio"></input>yes
              <input type="radio"></input>no
              <br/>
              <label>Are You A Resident In The US</label>
                <input type="radio"></input>yes
              <input type="radio"></input>no

          </div>
          <div>

          </div></>
      
        

    </>
  )
}

export default Display;