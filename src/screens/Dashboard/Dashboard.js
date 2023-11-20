import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { adminDetails, editAdminDetails } from '../../stores/utils/thunks';
import Graph from '../../components/Graph';

const Dashboard = () => {
    const userId = useSelector((state) => state.admin.id);
    const loading = useSelector((state) => state.admin.loading);
    const userDetails = useSelector((state) => state.admin.adminData);

    const dispatch = useDispatch()
      useEffect(()=>{
            dispatch(adminDetails(userId)) 
    },[])

    const [chargeCustomers, setChargeCustomers] = useState(0);
    const [category6, setCategory6] = useState(0);
    const [category7, setCategory7] = useState(0); 
    const [category8, setCategory8] = useState(0);
    const [category9, setCategory9] = useState(0);
    const [category10, setCategory10] = useState(0);

    useEffect(()=>{
        if(!loading) {
            setChargeCustomers(userDetails?.charge_customers);
            setCategory6(userDetails?.amount?.category_6);
            setCategory7(userDetails?.amount?.category_7);
            setCategory8(userDetails?.amount?.category_8);
            setCategory9(userDetails?.amount?.category_9);
            setCategory10(userDetails?.amount?.category_10);
        }
    },[loading, userDetails])

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedAmount = {
            amount: {
                category_6: category6,
                category_7: category7,
                category_8: category8,
                category_9: category9,
                category_10: category10
              }
          };
        dispatch(editAdminDetails({id:userId, newDetails:updatedAmount}))
        .then(dispatch(adminDetails(userId)));
      }

  return (
    <>
    {loading ? (<div>Loading...</div>) :
    (<form className='dashboard-container' onSubmit={handleSubmit}>
        <h1 className='heading'>{userDetails?.name}, {userDetails?.location} on Dhun Jam</h1>
        <div className='fields-container'>
            <div className='field-box'>
                <p>Do you want to charge your customers for requesting songs?</p>
                <div >
                    <label>
                        <input type='radio' id='yes' name='charge_customers'
                        value={true}
                        checked={chargeCustomers === true}
                        onChange={(e) => setChargeCustomers(e.target.value === 'true')}/>
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type='radio' id='no' name='charge_customers'
                        value={false}
                        checked={chargeCustomers === false}
                        onChange={(e) => setChargeCustomers(e.target.value === 'true')}/>
                        <span>No</span> 
                    </label>
                </div>
            </div>
            <div className='field-box'>
                <p>Custom song request amount-</p>
                <div className='input-box'>
                    <input className='input-field center' value={category6} type='number' min="99"
                    onChange={(e) => setCategory6(parseInt(e.target.value, 10))} required
                    disabled={!chargeCustomers}/>
                </div>
            </div>
            <div className='field-box'>
                <p>Regular song request amounts, from high to low-</p>
                <div>
                    <input className='input-field center' value={category7} type='number' min="79"
                    onChange={(e) => setCategory7(parseInt(e.target.value, 10))} disabled={!chargeCustomers}/>
                    <input className='input-field center' value={category8} type='number' min="59"
                    onChange={(e) => setCategory8(parseInt(e.target.value, 10))} disabled={!chargeCustomers}/>
                    <input className='input-field center' value={category9} type='number' min="39"
                    onChange={(e) => setCategory9(parseInt(e.target.value, 10))} disabled={!chargeCustomers}/>
                    <input className='input-field center' value={category10} type='number' min="19"
                    onChange={(e) => setCategory10(parseInt(e.target.value, 10))} disabled={!chargeCustomers}/>
                </div>
            </div>
        </div>
        {chargeCustomers ?
        <Graph custom={category6} category1={category7} category2={category8} category3={category9} category4={category10}/>
        : null}
        <input type='submit' value="Save" className='btn' 
        disabled={!chargeCustomers || category6<99 || category7<79 || category8<59 || category9<39 || category10<19}/>
    </form>
    )
  }
</>
)
}

export default Dashboard