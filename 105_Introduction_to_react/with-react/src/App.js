import logo from './logo.svg';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [ value, setValue ] = useState(0)

  return (
    
    <div className="App">
      <Navbar logoText1="Food" logoText2="App"/>
      <div className='value'>{value}</div>
      <button onClick={()=>{
        setValue(value + 1)
      }}>click me</button>
    </div>
    
  );
}

export default App;
