import React from 'react'
import './form.css'


const Form = () => {
    return (
        <div className='container mt-5 mb-5'>
            <form className="row g-3">
                <div className="col-md-6 f_field">
                    <label htmlFor="inputfname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="inputfname" />
                </div>
                <div className="col-md-6 f_field">
                    <label htmlFor="inputlname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="inputlname" />
                </div>

                <div className="col-md-6 f_field">
                    <label htmlFor="inputPone" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" id="inputPhone" />
                </div>
                <div className="col-md-6 f_field">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>

                <div className="col-12 f_field">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Write Your Message </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div className="col-12  ">
                    <button type="submit" className="btn f_btn">send your message</button>
                </div>
            </form> </div>
    )
}

export default Form