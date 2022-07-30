import { useEffect, useState } from 'react';
import './App.css';
import Radio from './components/Radio';
import Table from './components/Table';

function App() {
  const [state, setstate] = useState();

  useEffect(() => {
    console.log("insdie use effect of app.js")

  }, [state]);

  const receiveDataFromChild = (data_from_child) => {
    console.log(data_from_child)
    setstate(data_from_child)

  }

  return (
    <div className='container'>
      <div className="App">
        <h1>Welcome to BSort Logic!!!</h1>
        <h2 className='mt-3'>
          Sort data according to name and age / date of birth using radio button... 
        </h2>
      </div>
      <div className='mt-1'>
        <Radio sendDataToChild = {receiveDataFromChild} />
      </div>
      <div className='mt-5'>
        <Table data={state}/>
      </div>
    </div>
  );
}

export default App;
