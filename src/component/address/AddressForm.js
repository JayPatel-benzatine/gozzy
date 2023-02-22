import React, { useState } from 'react'
import './address.css'
import { Country, State, City } from 'country-state-city';
import axios from "axios";
import { getToken, getUserId, Address_data_get, Address_data_Put } from '../../utils/Common';
import { AddressUserDetails, AddresDetails } from '../../Atom/Atom'
import { useSetRecoilState, useRecoilState } from 'recoil';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddressForm = ({ statesClose }) => {
    const token = getToken();
    const userid = getUserId();
    const add = useSetRecoilState(AddressUserDetails)
    const [addss, setaddss] = useRecoilState(AddresDetails)
    const [countryCode, setCountryCode] = useState([])
    const [stateCode, setStateCode] = useState([])
    const [cityCode, setcityCode] = useState([])
    const [Aform, setAform] = useState({
        user_id: userid, full_name: "",
        phone: "", house_no: "",
        street: "", landmark: "",
        pin_code: "", isdefault: "0"
    })
    const S_country = Country.getAllCountries()
    const S_state = State.getStatesOfCountry(countryCode)
    const S_city = City.getCitiesOfState(countryCode, stateCode)


    const PostData = async () => {
        try {
             await axios(
                {
                    method: 'post',
                    url: 'http://ecommerceapi.benzatine.com/public/api/user-address',
                    data: Aform,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
          
        } catch (error) {
            console.log(error.response);
            return error.response;
        }

    }

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
        setAform({ ...Aform, [name]: myArray[1] })
        setaddss({ ...addss, [name]: myArray[1] })
    }

    const Get_city = (e) => {
        setcityCode(e.target.value)
        const name = e.target.name;
        const value = e.target.value;
        setAform({ ...Aform, [name]: value })
        setaddss({ ...addss, [name]: value })
    }
    const get_code = (e) => {
        const myArray = (e.target.value).split(" ");
        setCountryCode(myArray[0])
        const name = e.target.name;
        setAform({ ...Aform, [name]: myArray[1] })
        setaddss({ ...addss, [name]: myArray[1] })
    }


    const handleform = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAform({ ...Aform, [name]: value })
    }
    const edithandleform = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setaddss({ ...addss, [name]: value })
    }

    const handlecheckbox = (e) => {
        const { checked } = e.target;
        const name = e.target.name;
        if (checked) {
            setAform({ ...Aform, [name]: "1" })
        } else {
            setAform({ ...Aform, [name]: "0" })
        }
    }
    const Edithandlecheckbox = (e) => {
        const { checked } = e.target;
        const name = e.target.name;
        if (checked) {
            setaddss({ ...addss, [name]: "1" })
        } else {
            setaddss({ ...addss, [name]: "0" })
        }
    }
    const handleRadio = (e) => {
        const { checked, value, name } = e.target;
        if (checked) {
            setAform({ ...Aform, [name]: value })
        } else {
            setAform({ ...Aform, [name]: value })
        }
    }
    const edithandleRadio = (e) => {
        const { checked, value, name } = e.target;
        if (checked) {
            setaddss({ ...addss, [name]: value })
        } else {
            setaddss({ ...addss, [name]: value })
        }
    }

    const resetA = () => {
        setAform((S) => {
            return {
                ...S,
                city: "", full_name: "", phone: "", house_no: "",
                street: "", landmark: "", state: "", pin_code: "", type: "", country_code: ""
            }
        })
        var radioButton = document.getElementById("radio1");
        radioButton.checked = false;
        var radioButton2 = document.getElementById("radio2");
        radioButton2.checked = false;
        var check = document.getElementById("flexCheckChecked");
        check.checked = false;
        var ele = document.getElementById("inputselectcountry").options;
        for (var i = 0; i < ele.length; i++) {
            ele[i].selected = false;
        }
        var element = document.getElementById("inputselectstate").options;
        for (var j = 0; j < element.length; j++) {
            element[j].selected = false;
        }
        var elements = document.getElementById("inputselectcity").options;
        for (var k = 0; k < elements.length; k++) {
            elements[k].selected = false;
        }

    }

    const handleUpdateSubimit = (e) => {
        e.preventDefault();
        Address_data_Put(addss)
        resetA()
        statesClose();
        Address_data_get(add)
        clearatom()
    }
    const submitForm = (e) => {
        e.preventDefault();
        PostData()
        resetA()
        statesClose();
        Address_data_get(add)
        clearatom()
    }

    const clearatom = () => {

        setaddss({
            user_id: '', full_name: "",
            phone: "", house_no: "",
            street: "", landmark: "",
            pin_code: "", isdefault: "0"
        })
    }

    return (
        <>
            <div className="label_heading ms-3 me-3 ">
                <h5>Please enter your address carefully. It will be used htmlFor delivery.</h5>
            </div>
            <form onSubmit={
                (addss.full_name !== '') ?
                    handleUpdateSubimit :
                    submitForm
            }
                className="ms-1 me-1 g-3">
                <div className="row form-row mb-3">
                    <div className="col-md-5 forms_field ">
                        <label htmlFor="inputAname" className="form-label">Full Name</label>
                        <span className="text-danger">*</span>
                        <input type="text" name='full_name'
                            value={(addss.full_name !== '') ? addss.full_name : Aform.full_name}
                            onChange={(addss.full_name !== '') ? edithandleform : handleform}
                            placeholder='Enter Full Name'
                            autoComplete='off'
                            className="form-control"
                            id="inputAname" required />
                    </div>
                    <div className="col-md-3 forms_field">
                        <label htmlFor="inputselectstate" className="form-label">Country Code</label>
                        <select className="col-md-4 forms_field  form-select" name='country_code'
                            onChange={get_code}
                            id="inputselectcountry" required>
                            <option value=''>{
                                (addss.country_code !== null) ? (S_country.filter((elm)=>elm.phonecode === addss.country_code)).map((elm)=>elm.name)[0] : "--Select state--"}</option>
                            {
                                S_country.map((elm) => (
                                    <option key={elm.isoCode}

                                        value={elm.isoCode + ' ' + elm.phonecode}>{elm.name}(+{elm.phonecode}) </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-4 forms_field">
                        <label htmlFor="inputAphone" className="form-label">Phone Number</label>
                        <span className="text-danger">*</span>
                        <input type='tel' minLength={10} maxLength={10} autoComplete='off' name='phone'
                            value={(addss.full_name !== '') ? addss.phone : Aform.phone}
                            onChange={(addss.full_name !== '') ? edithandleform : handleform}
                            placeholder='Enter Phone Number'
                            className="form-control" id="inputAphone" required />
                    </div>
                </div>
                <div className="row form-row mb-3">
                    <div className="col-md-3 forms_field ">
                        <label htmlFor="inputAhouse" className="form-label">House's No.</label>
                        <span className="text-danger">*</span>
                        <input type="text" autoComplete='off' name='house_no'
                            value={(addss.full_name !== '') ? addss.house_no : Aform.house_no}
                            onChange={(addss.full_name !== '') ? edithandleform : handleform}
                            placeholder='Enter House No.'
                            className="form-control" id="inputAhouse" required />
                    </div>
                    <div className="col-md-6 forms_field ">
                        <label htmlFor="inputAstreet" className="form-label">Street Address</label>
                        <span className="text-danger">*</span>
                        <input type="text" autoComplete='off' name='street'
                            value={(addss.full_name !== '') ? addss.street : Aform.street}
                            onChange={(addss.full_name !== '') ? edithandleform : handleform}
                            placeholder='Enter Street Address'
                            className="form-control" id="inputAstreet" required />
                    </div>
                    <div className="col-md-3 forms_field ">
                        <label htmlFor="inputALandmark" className="form-label">Landmark</label>
                        <span className="text-danger">*</span>
                        <input type="text" autoComplete='off' name='landmark'
                            value={(addss.full_name !== '') ? addss.landmark : Aform.landmark}
                            onChange={(addss.full_name !== '') ? edithandleform : handleform}
                            placeholder='Enter Landmark'
                            className="form-control" id="inputALandmark" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputselectstate" className="form-label">State</label>
                        <select className="col-md-4 forms_field  form-select" name='state'
                            onChange={Get_state} id="inputselectstate" required>
                            <option value="">{(addss.state !== null) ? addss.state : "--Select state--"}</option>
                            {
                                S_state.map((elm, i) => (
                                    <option key={i} value={elm.isoCode + ' ' + elm.name}>{elm.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputselectstate" className="form-label" >City</label>
                        <select className="col-md-4 forms_field  form-select" name='city'
                            onChange={Get_city} id="inputselectcity" required>
                            <option value="">{(addss.city !== null) ? addss.city : "--Select state--"}</option>
                            {
                                S_city.map((elm, i) => (
                                    <option key={i} value={elm.isoCode}>{elm.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-4 forms_field ">
                        <label htmlFor="inputPin" className="form-label">Pin Code</label>
                        <input type="tel" autoComplete='off' name='pin_code'
                            value={(addss.full_name !== '') ? addss.pin_code : Aform.pin_code}
                            onChange={(addss.full_name !== '') ? edithandleform : handleform}
                            className="form-control" id="inputPin" maxLength={6} required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-check f_field">
                        <label htmlFor="inputAname" className="form-label">Type</label>
                        <span className="text-danger">*</span>
                        <div className="d-flex">
                            <div className="form-check ">
                                <input type="radio"
                                    className="form-check-input"
                                    checked={(addss.full_name === '') ? console.log('') : (addss.type === 'home')}
                                    onChange={(addss.full_name !== '') ? edithandleRadio : handleRadio} id="radio1"
                                    name="type" value="home" required />
                                <label className="form-check-label" htmlFor="radio1">Home</label>
                            </div>
                            <div className="form-check ms-3">
                                <input
                                    checked={(addss.full_name === '') ? console.log('') : (addss.type === 'work')}
                                    type="radio" onChange={(addss.full_name !== '') ? edithandleRadio : handleRadio} className="form-check-input" id="radio2" name="type" value="work" required />
                                <label className="form-check-label" htmlFor="radio2">Work</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-check">
                        <input className="form-check-input ms-0" name='isdefault'
                            type="checkbox"
                            checked={(addss.full_name === '') ? console.log('') : (addss.isdefault === '1')}
                            onChange={(addss.full_name !== '') ? Edithandlecheckbox : handlecheckbox} id="flexCheckChecked" />
                        <label className="form-check-label ms-2" htmlFor="flexCheckChecked">
                            Make This Address A Default Address
                        </label>
                    </div>
                </div>

                <div className="col-3 d-flex">
                    {(addss.full_name !== '' || addss.full_name === undefined) ?
                        <button type="submit" className="btn f_btn me-4">Update</button> :
                        <button type="submit" className="btn f_btn me-4">save</button>
                    }
                    <button type="submit" className="btn f_btn"
                        onClick={() => { statesClose(); clearatom(); }}
                    >cancel</button>

                </div>
            </form>
        </>
    )
}

export default AddressForm