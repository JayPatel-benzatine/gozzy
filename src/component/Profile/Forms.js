import React, { useEffect, useState } from 'react'
import './forms.css'
import { user_data_Put, getUserId, user_data_get, file_data_Post } from '../../utils/Common'
import { Country, State, City } from 'country-state-city';
import { ProfileDetails } from '../../Atom/Atom'
import { useSetRecoilState } from 'recoil';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Forms = () => {
    const userid = getUserId();
    const Countrycode = JSON.parse(localStorage.getItem('code'))
    const phonenumber = JSON.parse(localStorage.getItem('number'))
    const [images, setImages] = useState('')
    const [immages, setImmages] = useState('')
    const [i_data, seti_data] = useState('')
    const [cityCode, setcityCode] = useState([])
    const [stateCode, setStateCode] = useState([])
    const [IsoCode, setIsoCode] = useState([])
    const datas = useSetRecoilState(ProfileDetails)

    const S_country = Country.getAllCountries()
    const S_state = State.getStatesOfCountry(IsoCode)
    const S_city = City.getCitiesOfState(IsoCode, stateCode)

    const [r_data, setr_data] = useState({})

    const [f_data, setF_data] = useState({
        business_name: "",
        dob: "", email: "",
        gender: "", language_spoken: "",
        pin_code: "", name: "", occupation: "", phone: phonenumber
    })

    const { about_me, city_name, country, country_code, device_id,
        education, email_verified_at, fcm_token, isenable_notification, last_name, marital_status, monthly_income,
        name_of_school, number_of_kids, passing_year, profile_image,
        school_subject, id, status, user_type, share_logoinimage, share_withimage, shared_catalogs, show_my_wishlist, state_name,
        ...updatedData } = r_data;



    useEffect(() => {
        const codess = S_country.filter((elm) => elm.phonecode === Countrycode)
        setIsoCode(codess[0].isoCode);
        user_data_get(setr_data)
    }, [f_data])

    useEffect(() => {
        localStorage.setItem('name', r_data.name)
        datas(r_data)
    }, [r_data])



    const splitAtFirstSpace = (str) => {
        if (!str) return [];
        var i = str.indexOf(' ');
        if (i > 0) {
            return [str.substring(0, i), str.substring(i + 1)];
        }
        else return [str];
    }
    const Get_state = (e) => {
        const myArray = splitAtFirstSpace(e.target.value);
        setStateCode(myArray[0])
        const name = e.target.name;
        setF_data({ ...f_data, [name]: myArray[1] })
        setr_data({ ...r_data, [name]: myArray[1] })
    }
    const Get_city = (e) => {
        setcityCode(e.target.value)
        const name = e.target.name;
        const value = e.target.value;
        setF_data({ ...f_data, [name]: value })
        setr_data({ ...r_data, [name]: value })

    }


    useEffect(() => {
        eba()
    }, [images])

    const eba = () => {
        if (images !== '') {
            let ob = { profile_image: images }
            user_data_Put(ob, userid)
            user_data_get(setr_data)
        }

    }

    const onImageChange = (e) => {
        seti_data(e.target.files[0])
        setTimeout(() => {
            const data = new FormData()
            data.append('myfiles', i_data)
            file_data_Post(data, setImages)
        }, 1000);

    }

    const handleImageUpdate = (e) => {
        seti_data('')
        seti_data(e.target.files[0])
        const data = new FormData()
        data.append('myfiles', i_data)
        file_data_Post(data, setImages)
    }
    const handleform = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setF_data({ ...f_data, [name]: value })
        
    }

    const Rhandleform = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setr_data({ ...r_data, [name]: value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        user_data_Put(f_data, userid)
        user_data_get(setr_data)
        toast.success('Imformation Uploaded !', { theme: "dark", autoClose: 2000, });

    }

    const UpdateSubimit = (e) => {
        e.preventDefault();
        user_data_Put(updatedData, userid)
        toast.success('Imformation Updated !', { theme: "dark", autoClose: 2000, });

    }

    return (
        <div className='main_form'>
            <div className='container mb-5'>
                <div className=" d-flex mb-5 justify-content-center ">
                    <label htmlFor="photo-upload" className="custom-file-upload fas">
                        <div className="img-wrap img-upload">
                            {r_data.profile_image === '' || r_data.profile_image === null ? <img src={require('../../assets/upl.png')} alt='error' /> :
                                <img src={r_data.profile_image} alt='error' />
                            }
                        </div>
                        <input id="photo-upload" type="file"
                            accept='image/*'
                            onChange={r_data.business_name !== '' ?
                                handleImageUpdate : onImageChange}
                        />
                    </label>
                </div>
                <form onSubmit={
                    (r_data.business_name !== null) ?
                        UpdateSubimit :
                        submitForm
                } className="row ms-1 me-1 g-3">

                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputfname" className="form-label">Full Name</label>
                        <span className="text-danger">*</span>
                        <input type="text" className="form-control"
                            name='name'
                            value={(r_data.name !== '') ? r_data.name : f_data.name}
                            onChange={(r_data.business_name !== null ) ? Rhandleform : handleform}
                            id="inputfname" required   autoComplete='off'/>
                    </div>

                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputPone" className="form-label">Phone Number</label>
                        <input type="number" className="form-control"
                            name='phone'
                            value={(r_data.name !== '') ? r_data.phone : f_data.phone}
                            onChange={(r_data.business_name !== null || r_data.business_name !== '') ? Rhandleform : handleform}
                            id="inputPhone"
                            required 
                            autoComplete='off'
                            />
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputEmail4" className="form-label">Email ID</label>
                        <input type="email" className="form-control"
                            name='email'
                            value={(r_data.name !== '') ? r_data.email : f_data.email}
                            onChange={(r_data.business_name !== null) ? Rhandleform : handleform}
                            id="inputEmail4" required  autoComplete='off'/>
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputselect" className="form-label">Gender</label>
                        <select className="col-md-4 forms_field  form-select"
                            name='gender'
                            value={(r_data.name !== '') ? r_data.gender : f_data.gender}
                            onChange={(r_data.business_name !== null ) ? Rhandleform : handleform}
                            id="inputselect">
                            <option defaultValue=''></option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputOccupation" className="form-label">Occupation</label>
                        <input type="text" className="form-control"
                            name='occupation'
                            value={(r_data.name !== '') ? r_data.occupation : f_data.occupation}
                            onChange={(r_data.business_name !== null ) ? Rhandleform : handleform}
                            id="inputOccupation" required  autoComplete='off'/>
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputLanguage" className="form-label">Language Spoken</label>
                        <input type="text" className="form-control"
                            name='language_spoken'
                            value={(r_data.name !== '') ? r_data.language_spoken : f_data.language_spoken}
                            onChange={(r_data.business_name !== null ) ? Rhandleform : handleform}
                            id="inputLanguage" required  autoComplete='off'/>
                    </div>

                    <div className="col-md-6 forms_field ">
                        <label htmlFor="inputselectstate" className="form-label">State</label>
                        <select className="col-md-4 forms_field form-select" name='state'

                            onChange={Get_state} id="inputselectstate">
                            <option value='k'>{(r_data.state !== null) ? r_data.state : "--Select state--"}</option>
                            {
                                S_state.map((elm, i) => (
                                    <option key={i}
                                        value={elm.isoCode + ' ' + elm.name}
                                    >{elm.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-6 forms_field ">
                        <label htmlFor="inputselectstate" className="form-label">City</label>
                        <select className="col-md-4 forms_field  form-select"
                            name='city'
                            onChange={Get_city}
                            id="inputselectstate">
                            <option value="">{(r_data.state !== null) ? r_data.city : "--Select city--"}</option>
                            {
                                S_city.map((elm, i) => (
                                    <option key={i} value={elm.isoCode}>{elm.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputPin" className="form-label">Pin Code</label>
                        <input type='tel' className="form-control"
                            name='pin_code'
                            value={(r_data.name !== '') ? r_data.pin_code : f_data.pin_code}
                            onChange={(r_data.business_name !== null ) ? Rhandleform : handleform}
                            id="inputPin" required  
                            maxLength={6}
                            autoComplete='off'/>
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputdate" className="form-label">Date Of Birth</label>
                        <input type="date" className="form-control"
                            name='dob'
                            value={(r_data.name !== '') ? r_data.dob : f_data.dob}
                            onChange={(r_data.business_name !== null ) ? Rhandleform : handleform}
                            id="inputdate" required  autoComplete='off'/>
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputbname" className="form-label">Business Name</label>
                        <input type="text" className="form-control"
                            name='business_name'
                            value={(r_data.name !== '') ? r_data.business_name : f_data.business_name}
                            onChange={(r_data.business_name !== null ) ? Rhandleform : handleform}
                            id="inputbname" required  autoComplete='off'/>
                    </div>
                    <div className="col-12 ">
                        <button type="submit"
                            className="btn f_btn">save</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Forms