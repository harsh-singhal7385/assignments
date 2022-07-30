import React, { useState } from 'react';
import './Radio.css'

const Radio = (props) => {
    
    const [response, setresponse] = useState("")
   
    const handleSubmit = (event) =>{
        event.preventDefault()
        // console.log(response)
        if(response.length > 0){
            sendDataToparent(response)
        }

    }

    const sendDataToparent = (data)=>{
        // console.log(data)
        props.sendDataToChild(data)
    }


    const handleChangeInInput = (event) =>{
        const { name , value } = event.target
        setresponse(value)
    }


    return (
        <div className='styling'>
            <form className='mt-5' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-check">
                        <input className="form-check-input" type="radio" onChange={handleChangeInInput} name="sort" value="name_sort" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-check">
                        <input className="form-check-input" type="radio" onChange={handleChangeInInput} name="sort" value="age_sort" />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-check">
                        <label className="form-check-label" htmlFor="">
                            Sort by Name
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-check">
                        <label className="form-check-label" htmlFor="">
                            Sort by Age / Date of Birth
                        </label>
                    </div>
                </div>
                <div className='mt-5 submit-btn'>
                    <input type="submit" value="Submit Choice..." className='btn btn-danger' />
                </div>
            </form>
        </div>
    );
}

export default Radio;
