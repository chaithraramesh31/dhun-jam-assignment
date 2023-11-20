import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Dashboard from './screens/Dashboard/Dashboard';
import Login from './screens/Login/Login';
import { useEffect } from 'react';
import { adminDetails } from './stores/utils/thunks';

function App() {

  const userId = useSelector((state) => state.admin.id);
  // const userDetails = useSelector((state) => state.admin.adminData);

  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   if(userId){
  //       dispatch(adminDetails(userId))
  //   }
  // },[])

  return (
    <div className='main-container'>
      {
        !userId ? 
        <Login/> :
          <Dashboard/>
      }
    </div>
  );
}

export default App;
