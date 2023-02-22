import React from 'react'
import './bank.css'
import BankForm from './BankForm'
const Banks = () => {
  return (
    <div className='container bank_main '>
      <div className="bank_head text-center text-uppercase mt-5 mb-4 ">
        <h1>bank details</h1>
      </div>
      <div className="label_heading ms-3 me-3 text-center">
        <h5>Please enter your correct bank details carefully. They will be used for all refunds, and bonus payments.</h5>
      </div>
      <div className="bank_form ms-3 me-3">
        <BankForm />
      </div>

    </div>
  )
}

export default Banks