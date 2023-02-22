import React, { useEffect, useState } from 'react'
import './bank.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Bank_data_Post, Bank_data_get, Bank_data_Put, file_data_Post } from '../../utils/Common';

const BankForm = () => {
    let userid = localStorage.getItem('user')

    const [i_data, seti_data] = useState('')
    const [images, setImages] = useState('')
    const [immages, setImmages] = useState('')

    const [f_data, setf_data] = useState({
        account_holder_name: '',
        account_number: '',
        ifsc_code: '',
        user_id: userid
    })
    const [Update_data, setUpdate_data] = useState({
        account_holder_name: '',
        account_number: '',
        ifsc_code: '',
        user_id: userid

    })

    useEffect(() => {
        Bank_data_get(setUpdate_data)
    }, [])


    const handleform = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setf_data({ ...f_data, [name]: value })

    }
    const handlefile = (e) => {
        seti_data(e.target.files[0])
    }
    const handleUpdatefile = (e) => {
        seti_data('')
        seti_data(e.target.files[0])
    }

    const handleformUpdate = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUpdate_data({ ...Update_data, [name]: value })

    }

    const resetF_Data = () => {
        setf_data((S) => {
            return {
                ...S,
                account_holder_name: '',
                account_number: '',
                ifsc_code: '',
                photo: ''
            }
        })
    }

    const handleSubimit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('myfiles', i_data)
        file_data_Post(data, setImages)
        toast.success('Information Uploaded', { theme: "dark", autoClose: 2000, });

    }

    useEffect(() => {
        eba()
    }, [images])

    const eba = () => {
        setTimeout(() => {
            if (images !== '') {
                let ob = { photo: images }
                let n_data = { ...f_data, ...ob };
                Bank_data_Post(n_data)
                Bank_data_get(setUpdate_data)
                resetF_Data()
            }

        }, 1000);
    }
    useEffect(() => {
        ebas()
    }, [immages])

    const ebas = () => {
        setTimeout(() => {
            if (immages !== '') {
                let ob = { photo: immages }
                let n_data = { ...Update_data, ...ob };
                
                Bank_data_Put(n_data, setUpdate_data)
                Bank_data_get(setUpdate_data)
            }

        }, 1000);
    }

    const handleUpdateSubimit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('myfiles', i_data)
        file_data_Post(data, setImmages)
        toast.success('Information Updated', { theme: "dark", autoClose: 2000, });


    }
    return (
        <>
            <div className='container mt-4 mb-5 '>
                <form className="row g-3" onSubmit={
                    Update_data.account_number !== '' ?
                        handleUpdateSubimit :
                        handleSubimit
                }>
                    <div className="col-md-6 f_field">
                        <label htmlFor="inputBnumber" className="form-label">Account Number<span className=' text-danger'>*</span></label>
                        <input type="number"
                            name='account_number'
                            value={
                                Update_data.account_number !== '' ?
                                    Update_data.account_number :
                                    f_data.account_number
                            }
                            onChange={
                                Update_data.account_number !== '' ?
                                    handleformUpdate :
                                    handleform
                            }
                            autoComplete='off'
                            placeholder='Enter Account Number'
                            className="form-control"
                            id="inputBnumber" required />
                    </div>
                    <div className="col-md-6 f_field">
                        <label htmlFor="inputBname" className="form-label">Account Houlder's Name<span className=' text-danger'>*</span></label>
                        <input type="text" placeholder='Enter Account Houlder Name'

                            value={
                                Update_data.account_number !== '' ?
                                    Update_data.account_holder_name :
                                    f_data.account_holder_name
                            }
                            name='account_holder_name'
                            onChange={
                                Update_data.account_number !== '' ?
                                    handleformUpdate :
                                    handleform
                            }
                            autoComplete='off'
                            className="form-control" id="inputBname" required />
                    </div>

                    <div className="col-md-6 f_field">
                        <label htmlFor="inputBcode" className="form-label">IFSC Code<span className=' text-danger'>*</span></label>
                        <input type="text" placeholder='Enter IFSC Code'
                            value={
                                Update_data.account_number !== '' ?
                                    Update_data.ifsc_code :
                                    f_data.ifsc_code
                            }
                            name='ifsc_code'
                            onChange={
                                Update_data.account_number !== '' ?
                                    handleformUpdate :
                                    handleform
                            }
                            autoComplete='off'
                            className="form-control" id="inputBcode" />
                    </div>
                    <div className="col-md-6 f_field">
                        <label htmlFor="inputBfile" className="form-label">Add Passbook Or Cheque Photo<span className=' text-danger'>*</span></label>
                        <input type='file' className="form-control"
                            value={f_data.photo}
                            accept="image/*"
                            name='photo'
                            onChange={
                                Update_data.account_number !== '' ?
                                    handleUpdatefile :
                                    handlefile
                            }
                            autoComplete='off'
                            id="inputBfile" required/>
                    </div>

                    <div className={Update_data.photo !== '' ? "cheque_img" : 'd-none'}>
                        <img src={Update_data.photo} alt="" className='w-50' />
                    </div>
                    <div className=" text-center">
                        {Update_data.account_number !== '' ?
                            <button type="submit" className="btn f_btn">Update</button> :
                            <button type="submit" className="btn f_btn">save</button>
                        }
                    </div>
                </form> </div>
                <ToastContainer />
        </>
    )
}

export default BankForm