import { useSelector } from 'react-redux';
import './App.css';
import Dashboard from './screens/Dashboard/Dashboard';
import Login from './screens/Login/Login';

function App() {

  const userId = useSelector((state) => state.admin.id);

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
