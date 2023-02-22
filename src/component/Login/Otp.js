import React, { useState } from 'react'
import './Login.css'
import OTPInput from "otp-input-react";
import axios from 'axios';
import { LoginResponce, UserProfile } from '../../Atom/Atom'
import { useRecoilState } from 'recoil'
import { setUserSession } from '../../utils/Common'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Otp = () => {
    const [otps, setOTP] = useState("");
    const [isLoad, setisLoad] = useState([]);
    const [responce, setResponce] = useRecoilState(LoginResponce)
    const [user, setUser] = useRecoilState(UserProfile)
    const navigate = useNavigate()

    const PostData = async () => {
        try {
            let res = await axios(
                {
                    method: 'post',
                    url: 'http://ecommerceapi.benzatine.com/public/api/verify_otp',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${responce.access_token}`
                    },
                    data: { otp: otps }
                }
            );
            let datas = res.data.data;
            localStorage.setItem('name', datas.name)
            localStorage.setItem('code', JSON.stringify(datas.country_code))
            localStorage.setItem('number', JSON.stringify(datas.phone))
            setResponce(datas)
            setUser(datas)
            setUserSession(datas.access_token, datas.id)
            setisLoad([res.data.status_code]);
            toast.success(res.data.message, { theme: "dark", autoClose: 2000, });
        } catch (error) {
            console.log(error.response);
            toast.error("Please check OTP !", { theme: "dark", autoClose: 2000, });
            return error.response;
        }

    }

    const handleotp = () => {
        PostData()
    }

    return (
        <>
            {
                isLoad[0] === 200 ? (
                    <div className=' d-flex  justify-content-center mt-5 mb-5' >
                        <div className="sucess_otp d-flex flex-column align-items-center"
                            style={{ border: '1px solid black', padding: '20px 68px' }}>
                            <img src={require("../../assets/thumb.png")} alt="" />
                            <h2 className=' text-uppercase mt-2'>account created !</h2>
                            <p className=' text-capitalize text-muted'>your account has been created successfully</p>
                            <p className=' text-capitalize text-muted'>press continue to start using app</p>
                            <button className='f_btn mb-4' onClick={() => navigate('/')}>continue</button>
                            <p className=' text-muted'>By continuing,  You agree to Goozzy's </p>
                            <p className=' text-capitalize' style={{ color: "#7165e3" }}>term & conditions ands privacy policy </p>
                        </div>
                    </div>

                ) : (
                    <div className='otp_main m-5 d-flex flex-column align-items-center'>
                        <h4 className=' text-uppercase fw-bolder'> otp verification</h4>
                        <p className=' text-capitalize text-muted'>enter 4-digit code we have send at </p>
                        <p className=' text-dark fw-lighter fs-6'>+91 6351008716</p>
                        <div className="otp ps-5 pt-4 pb-4 pe-5 d-flex flex-column align-items-center" style={{ border: "1px solid black" }}>
                            <OTPInput value={otps} onChange={setOTP} OTPLength={4} otpType="number" disabled={false}
                                inputStyles={{ height: "40px", width: "35px", borderColor: " #dddddd", borderRadius: "10px" }}
                            />
                            <p className=' mt-2 text-capitalize text-muted'>didn't recive code ? </p>
                            <h6 className='resend mb-2'>Resend OTP</h6>
                            <button className='f_btn mb-3' onClick={handleotp}>proceed</button>
                            <p className=' text-muted'>By continuing,  You agree to Goozzy's </p>
                            <h6 className=' text-capitalize' style={{ color: "#7165e3" }}>term & conditions ands privacy policy </h6>
                        </div>
                    </div>
                )
            }
            <ToastContainer />
        </>

    )
}

export default Otp