import React, { useState } from 'react'
import './Login.css'
import { Country } from 'country-state-city';
import axios from 'axios';
import Otp from './Otp'
import { LoginResponce } from '../../Atom/Atom'
import { useSetRecoilState } from 'recoil'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [code, setCode] = useState([])
  const [reset, setrest] = useState(false)
  const [isLoad, setisLoad] = useState([])
  const [number, setNumber] = useState([])
  const S_country = Country.getAllCountries()
  const setResponce = useSetRecoilState(LoginResponce)


  const PostData = async () => {
    try {
      let res = await axios(
        {
          method: 'post',
          url: 'http://ecommerceapi.benzatine.com/public/api/login',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          data: { country_code: code, phone: number }
        }
      );
      setResponce(res.data.data)
      let datas = res.data;
      setisLoad([datas.status_code]);
      toast.info("Please Verify OTP : 1111 !", { theme: "dark", autoClose: 2000, });


    } catch (error) {
      console.log(error.response);
      toast.error("Error !", { theme: "dark", autoClose: 2000, });
      return error.response;
    }

  }

  const handlesubmit = (e) => {
    e.preventDefault();
    PostData()
    setrest(!reset)
    setCode([])
    setNumber([])
  }

  return (
    <>
      {
        isLoad[0] === 200 ? (
          <Otp  />
        ) : (
          <div className='container d-flex flex-column align-items-center mt-5 mb-5'>
            <h3 className=' text-uppercase'>login</h3>
            <h6 className='text-muted mb-3'>Please enter your phone number. We will send you 4-digit code to verify your account.</h6>
            <form onSubmit={handlesubmit}>
              <div className="list_country ">
                <div className="country_field d-flex align-items-center justify-content-center">
                  <div className="me-3 select_fields">
                    <label htmlFor="inputselectstate" className="form-label">Country Code</label>
                    <select className="form-select s_option" required
                      onChange={(e) => setCode(e.target.value)} id="inputselectstate">
                      <option selected={reset ? true : false} value={code}>--Select--</option>
                      {
                        S_country.map((elm) => (
                          <option key={elm.isoCode} value={elm.phonecode} >(+{elm.phonecode}){elm.name} </option>
                        ))
                      }
                    </select></div>
                  <div className="inputs_fields">
                    <label className="form-label">Phone Number</label>
                    <input type='tel' minLength={10} maxLength={10} placeholder='Enter Phone Number' value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className="form-control f_inputs" required />
                  </div>
                </div>
                <div className="otp_btn mt-3">
                  <button className='f_btn'>send otp</button>
                </div>
              </div>
            </form>
          </div>
        )
      }
      <ToastContainer />
    </>
  )
}

export default Login