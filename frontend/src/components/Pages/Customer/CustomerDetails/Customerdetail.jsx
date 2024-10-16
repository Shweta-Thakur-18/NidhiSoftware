import React,{useState} from "react";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import "./customerdetail.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Customerdetail(){
    const[aadhar,setAadhar] = useState("");
    const[title,setTitle] = useState("");
    const[memName,setMemName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [memEmail, setMemEmail] = useState("");
    const [address, setAddress] = useState("");
    const[pincode,setPincode] = useState("");
    const [city, setCity] = useState("");
    const [occupation, setOccupation] = useState("");
    const [dob, setDob] = useState("");
    const [verifyMob, setVerifyMob] = useState("");
    const [gender, setGender] = useState("");
    const [income, setIncome] = useState("");
    const [careOf, setCareOf] = useState("");
    const [altMob, setAltMob] = useState("");
    const [altEmail, setAltEmail] = useState("");
    const [landmark, setLandmark] = useState("");
    const [state, setState] = useState("");
    const [mart, setMart] = useState("");
    const [doj, setDoj] = useState("");
    const createdBy =JSON.parse(localStorage.getItem("userInfo"));
    const crtBy = createdBy.data.email;

    const[item,setItem]=useState("item1");
    const navigate=useNavigate();
    const handleClick=(item)=>{
        setItem(item);
        if(item==="item2"){
            navigate("/kyc");

        }
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        e.stopPropagation();
        const data={aadhar,title,memName,mobileNo,memEmail,address,pincode,city,occupation,dob,gender,income,careOf,altMob,altEmail,landmark,state,mart,doj,crtBy}
        try{
            const config = {
                headers: {
                    "Content-type": "application/json",
                }, 
            };
            const response=await axios.post("http://localhost:8000/api/member/memData",data,config)
            localStorage.setItem("memberInfo", JSON.stringify(response));

            console.log(response);
        }catch{
            console.log("Error in the customer form");
        }
    }
    return(
        <div className="customerdetail">
            <Sidepanel/>
            <div className="customerdetail-body">
                <div className ="topbox">
                    
                    <div className="top-comp" onClick={() => handleClick('item1')} style={{ color: item === 'item1' ? 'blue' : ' ' }}>
                        <div className="top-icon" style={{background:"blue",color:"white"}}><AiOutlineUser/></div>
                        <div className="top-body">
                            <span style={{fontWeight:"bold",fontSize:"0.7rem"}}>Customer Information</span>
                            <span>Enter Customer Personal Information</span>
                        </div>
                        <div style={{"width":"1rem" }}><AiOutlineRight/></div>
                    </div>
                    
                    <div className="top-comp" onClick={() => handleClick('item2')} style={{ color: item === 'item2' ? 'blue' : 'inherit' }}>
                        <div className="top-icon"><HiOutlineDocumentText /></div>
                        <div className="top-body">
                            <span >Upload E-KYC</span>
                            <span>Setup E-KYC for member</span>
                        </div>
                        <div style={{ "width": "1rem" }}><AiOutlineRight /></div>
                    </div>
                    
                </div>
                <div className="customerdetail-form">
                    <span><b>Customer Details</b></span>
                    <p style={{"fontSize":"0.7rem"}}>Enter Customer Personal Information</p>
                    <form>
                        <div className="customer-input">
                            <input type="text"  placeholder="Aadhar Number" value={aadhar} onChange ={(e)=>setAadhar(e.target.value)}></input>
                        </div>
                        <div className="customer-input">
                            <input type="text" placeholder="Mobile Number" value={verifyMob} onChange={(e) => setVerifyMob(e.target.value)}></input>
                        </div>
                        <div className="customer-input">
                            <label>Title</label>
                            <select name="accounts" value={title} onChange={(e) => setTitle(e.target.value)}>
                                <option disabled >Select Title</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                            </select>
                        </div>
                        <div className="customer-input">
                            <label>Gender</label>
                            <select name="accounts" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option disabled >Select Title</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="customer-input">
                            <label>Member Name</label>
                            <input type="text" placeholder="Enter Customer Name" value={memName} onChange={(e) => setMemName(e.target.value)} ></input>
                        </div>
                        <div className="customer-input">
                            <label>Husband/Father Name</label>
                            <input type="text" placeholder="Enter Husband/Father Name" value={careOf} onChange={(e) => setCareOf(e.target.value)}></input>
                        </div>
                        <div className="customer-input">
                            <label>Mobile </label>
                            <input type="text" placeholder="Enter Mobile No." value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}></input>
                        </div>
                        <div className="customer-input">
                            <label>Alternate Mobile</label>
                            <input type="text" placeholder="Enter Alternate Mobile No." value={altMob} onChange ={(e)=>setAltMob(e.target.value)} ></input>
                        </div>
                        <div className="customer-input">
                            <label>Email</label>
                            <input type="text" placeholder="Enter Email" value={memEmail} onChange={(e) => setMemEmail(e.target.value)}></input>
                        </div>
                        <div className="customer-input">
                            <label>Alternate Email</label>
                            <input type="text" placeholder="Enter Alternate Email" value={altEmail} onChange={(e) => setAltEmail(e.target.value)} ></input>
                        </div>
                        <div className="customer-input">
                            <label>Address</label>
                            <input type="text" placeholder="Enter Customer Address" value={address} onChange={(e) => setAddress(e.target.value)} ></input>
                        </div>
                        <div className="customer-input">
                            <label>Landmark</label>
                            <input type="text" placeholder="Enter Landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} ></input>
                        </div>
                        <div className="customer-input">
                            <label>Pincode</label>
                            <input type="text" placeholder="Enter Postal Code" value={pincode} onChange={(e) => setPincode(e.target.value)} ></input>
                        </div>
                        <div className="customer-input">
                            <label>State</label>
                            <select name="accounts" value={state} onChange={(e) => setState(e.target.value)}>
                                <option disabled >Select State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chaattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujrat">Gujarat</option>
                                <option value="Haryana">Haryana </option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttrakhand">Uttrakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                        <div className="customer-input">
                            <label>City</label>
                            <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)}></input>
                        </div>
                        <div className="customer-input">
                            <label>Martial Status</label>
                            <select name="accounts" value={mart} onChange={(e) => setMart(e.target.value)}>
                                <option disabled >Select Status</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                            </select>
                        </div>
                        <div className="customer-input">
                            <label>Occupation</label>
                            <input type="text" placeholder="Enter Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)}></input>
                        </div>
                        <div className="customer-input">
                            <label>Annual Income</label>
                            <input type="text" placeholder="0" value={income} onChange={(e) => setIncome(e.target.value)} ></input>
                        </div>
                        <div className="customer-input">
                            <label>Date of Birth</label>
                            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} ></input>
                        </div>
                        <div className="customer-input">
                            <label>Date of Joining </label>
                            <input type="date" value={doj} onChange={(e) => setDoj(e.target.value)}></input>
                        </div>
                        <button ><AiOutlineArrowLeft /> Previous </button>
                        <button type="submit" onClick={(e)=>submitHandler(e)}> Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}