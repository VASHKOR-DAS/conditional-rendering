import { useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [familiar, setFamiliar] = useState(false);

  return (
    <div className='App'>

      {/* dynamically show true/false */}
      <h2>Is Familiar : {familiar.toString()}</h2>
      
      {/* ja thakbe tar biporid ta dekhabe er jnne (!familiar) */}
      <button onClick={()=>setFamiliar(!familiar)}>Toggle</button>

      {/* User component er vitore condition ta pathano hoyeche */}
      <User familiar = {familiar}></User>
    </div>
  );
}

export default App;
