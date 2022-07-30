import React, { useEffect, useState } from 'react';

const Usd = (props) => {
    const [state, setstate] = useState({
        currency_1 : "",
        currency_2 : "",
        input_1 : ""
    })

    const [receiveData, setReceiveData] = useState({
        general_info : "",
        complete_info : "",
        final_amount : ""
      })

    const handleUserInput = (event) =>{
        const { name , value } = event.target

        setstate((prevState)=>{
            return {
                ...state,
                [name] : value
            }
        })
    }

    
    useEffect(() => {
        console.log(props.sendDataToChild,"use effect in usd.js")
        setReceiveData({
            general_info: props.sendDataToChild['general_info'],
            complete_info: props.sendDataToChild['complete_info'],
        })

    }, [props]);


    const handleSubmit =  (event) =>{
        event.preventDefault()
        console.log("inside handle submit",state)
         getData(state)
        // console.log("after .....")

    }

    const getData = (data) =>{
        // console.log("before .....")
        props.getData(data)
    }

    // const sendData = (data) =>{
    //     console.log(data)
    //     setReceiveData(data)
    // }

    return (
        <>
           <div className='container'>
                <form className='mt-5' onSubmit={handleSubmit}>
                    <div className='row form-group'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            <div className='row'>
                                <div className='form-group col-lg-6 col-md-6 col-sm-6 col-6'>
                                    <input type="text" onChange={handleUserInput} name="input_1" value={state.input_1} className='form-control'/>
                                </div>
                                <div className='form-group col-lg-6 col-md-6 col-sm-6 col-6'>
                                    <select className="form-select" onChange={handleUserInput} name="currency_1" value={state.currency_1} aria-label=".form-select-lg example">
                                        <option selected hidden >select 1st currency</option>
                                        <option value="inr">INR</option>
                                        <option value="usd">USD</option>
                                        <option value="aed">AED</option>
                                        <option value="euro">EURO</option>
                                        <option value="cad">CAD</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                      
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                        <div className='row'>
                                <div className='form-group col-lg-6 col-md-6 col-sm-6 col-6'>
                                    <input type="text" placeholder='Output is...' name="output_1" value={props.sendDataToChild['final_amount']} className='form-control' readOnly/>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                                    <select className="form-select" onChange={handleUserInput} name="currency_2" value={state.currency_2} aria-label=".form-select-lg example">
                                        <option selected hidden>select 2nd currency</option>
                                        <option value="inr">INR</option>
                                        <option value="usd">USD</option>
                                        <option value="aed">AED</option>
                                        <option value="euro">EURO</option>
                                        <option value="cad">CAD</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 my-center-style'>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
                <input type="text" placeholder='Output is...' name="output_1" value={props.sendDataToChild['general_info']} className='form-control mt-5' readOnly/>
                <input type="text" placeholder='Output is...' name="output_1" value={props.sendDataToChild['complete_info']} className='form-control mt-5' readOnly/>
                
           </div>
        </>
    );
}

export default Usd;
