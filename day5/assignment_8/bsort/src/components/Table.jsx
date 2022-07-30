import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import Radio from './Radio';

const Table = (props) => {
    const [state, setstate] = useState([]);

    let data_temp = []

    useEffect(() => {
        console.log("inside use effect of table.js",typeof(props.data))

        axios.get('./data.json')                                    
        .then(async (response)=>{    
            data_temp = response.data

        if(props.data === "name_sort"){

            await data_temp.sort(function(a, b){
                if(a['name'] < b['name']) { return -1; }
                if(a['name'] > b['name']) { return 1; }
                return 0;
            })

            setstate(data_temp)

        }else if(props.data === "age_sort"){

            await data_temp.sort(function (a, b) {
                let dateA = new Date(a.date);
                let dateB = new Date(b.date);
                // console.log(dateA,dateB)
                return dateA - dateB
              });
            setstate(data_temp)

        }else{
            //default data 
            setstate(data_temp)
        }
    
        }).catch((err)=>{
          console.log(err)
        })

    }, [props.data]);

    return (
        <div className='mt-3'>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age / DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((value)=>{
                            return(
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
