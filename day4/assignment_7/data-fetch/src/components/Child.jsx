import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Child = (props) => {
    const [state, setstate] = useState(props.data);

    // const [status, setstatus] = useState(false);

    useEffect(() => {
        setstate(props.data)
        // setstatus(props.status)
        // console.log(status)
    }, [props.data]);

    return (
        <div>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">UserId</th>
                        <th scope="col">Body</th>
                        <th scope="col">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((value) => {
                        // console.log(value);
                        return (
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value['userId']}</td>
                            <td>{value['title']}</td>
                            <td>{value['body']}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
            {state.map((value,index,arr) => {
                    <div style={{'color':'black'}}>{value}</div>
                    // console.log(value)
            })}
            </div>
        </div>
    );
}

export default Child;
