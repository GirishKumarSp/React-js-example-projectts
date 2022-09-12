import { useState } from 'react';
import './App.css';
import ButtonPanel from './Components/ButtonPanel';
import Calculate from './Components/Calculate';
import Display from './Components/Display';

function App() {
  const [allstate, setAllstate] = useState({ total: null, next: null, operation: null })

  const handleClick = (buttonName) => {
    setAllstate(Calculate(allstate, buttonName))
  }

  return (
    <div className="component-app flex flex-col ">
      <Display value={allstate.next || allstate.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
