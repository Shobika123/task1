import React from 'react';
import { useNavigate} from 'react-router-dom';

import "./Home.css"
import Table from "./Table"


const Home = () => {
    

  return (
    <>
        <select className='select'>
        <option value="option1"> Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        <input type="text" className='input'></input>
        <button className='button__icon'></button>

        <div>
            <card className="main__card">
                <title className='title'>Total New Drivers</title>
                <title className='title__bottom'>  340</title>
            </card>
        </div>
        <div>
            <card className="card1">
                <title className='title1'>Active Drivers</title>
                <title className='title__bottom1'>  340</title>
            </card>
        </div>
        <div>
            <card className="card2">
                <title className='title1'>In Process</title>
                <title className='title__bottom1'>  340</title>
            </card>
        </div>
        <div>
            <card className="card3">
                <title className='title1'>In Active Drivers </title>
                <title className='title__bottom1'> 340</title>
            </card>
        </div>
        <div>
            <card className="card4">
                <title className='title1'>Rejected  Drivers</title>
                <title className='title__bottom1'> 340</title>
            </card>
        </div>
        <div>
            
            
            <button className='card__button' > Add New Driver </button>
                 

        </div>
        <div>
            <card className="card5">
                <title className='title1'>Total New Drivers </title>
                <title className='title__bottom1'> <h3>30% </h3>  340</title>
            </card>
        </div>
        <div>
            <Table/>
        </div>
    </>
  )
}

export default Home