import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-conatiner'>
        <h1>Social, Hebbal on Dhun Jam</h1>
        <div className='fields-container'>
            <div className='field-box'>
                <p>Do you want to charge your customers for requesting songs?</p>
                <div >
                    <label>
                        <input type='radio' id='yes' name='charge_customers'/>
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type='radio' id='no' name='charge_customers'/>
                        <span>No</span>
                    </label>
                </div>
            </div>
            <div className='field-box'>
                <p>Custom song request amount-</p>
                <div className='input-box'>
                    <input className='login-input' type='number' min="99"/>
                </div>
            </div>
            <div className='field-box'>
                <p>Regular song request amounts, from high to low-</p>
                <div>
                    <input className='login-input' type='number' min="79"/>
                    <input className='login-input' type='number' min="59"/>
                    <input className='login-input' type='number' min="39"/>
                    <input className='login-input' type='number' min="19"/>
                </div>
            </div>
        </div>
        <button className='btn'>Save</button>
    </div>
  )
}

export default Dashboard