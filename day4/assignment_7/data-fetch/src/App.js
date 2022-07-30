import { useEffect, useState } from 'react';
import './App.css';
import Child from './components/Child';
import axios from 'axios'

function App() {
  
  const [state, setstate] = useState([]);
  // const [status, setstatus] = useState(false);

  const handleSubmit =  (event) =>{
    event.preventDefault()
     getData()
  }

  const getData = () =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
            setstate(response.data)
            // setstatus(true)
          }).catch(error => {
            console.log(error)
        });
  }

  useEffect(() => {
    // console.log(status)
  }, [state]);

  return (
    <div className='style-center container'>
      <div >
        <h1 >Welcome to Data Fetcher !!!</h1>
        <h2 className='mt-5'>Click below button to load data in child component...</h2>
      </div>
      <div className='mt-5 ml-auto' >
        <form onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-primary" >Load Data</button>
        </form>
      </div>
      <Child  data={state}/>
      <div>
      {/* {state.map((value) => {
                    console.log("hi inside map");
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">{value.userId}</th>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.body}</td>
                    </tr>
                    </tbody>
                    </table>
                })} */}
      </div>
    </div>
  );
}

export default App;
