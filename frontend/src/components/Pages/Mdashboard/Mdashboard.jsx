import React,{useState} from "react";
import "./Mdashboard.css";
import { FiUser } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import {Link, useNavigate} from "react-router-dom";

export default function Mdashboard(){
    const [inputValue, setInputValue] = useState('');
    const navigate=useNavigate();
    const checkButton = () => {
        if (!inputValue.trim()) {
            alert('Please enter a value');
            
        }else{
        navigate("/cashdetail")
        }
        
    };
    
    return(
        <div className="d-flex m-dash gap-3">
            <div className="m-dash1">
                <form>
                <div className="mx-5 px-5 my-2"><p className="fw-bold lh-1 m-0 p3 fs-5">Search Member</p>
                <p className="p2 mx-3">(Fetch for Transaction)</p></div>
                    <input placeholder="Enter Member ID/Mobile/Account" type="text" className="dash-input my-3" required value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
                <button type="submit" className="button-fetch" onClick={checkButton}>Fetch Details</button>
                </form>
            </div>
            <div className="m-dash2">
                <p className="fw-bolder fs-5 m-1">Daily Business Summary</p>
                <div className="d-flex main-bus-box ">
                    <div className="sub-bus-box">
                        <div className="bus-box"><FiUser/></div>
                        <div><p className="m-0 fw-bolder mx-1">126</p>
                        <p className="p2">Member's</p></div>
                        
                    </div>
                    <div className="sub-bus-box">
                        <div className="bus-box"><FiUser/></div>
                        <div><p className="m-0 fw-bolder mx-1">126</p>
                        <p className="p2">S/B_A/C</p></div>
                        
                    </div>
                    <div className="sub-bus-box">
                        <div className="bus-box"><FiUser/></div>
                        <div><p className="m-0 fw-bolder mx-1">126</p>
                        <p className="p2">RD_A/C</p></div>
                        
                    </div>
                    <div className="sub-bus-box">
                        <div className="bus-box"><FiUser/></div>
                        <div><p className="m-0 fw-bolder mx-1">126</p>
                        <p className="p2">FD_A/C</p></div>
                        
                    </div>
                    <div className="sub-bus-box">
                        <div className="bus-box"><FiUser/></div>
                        <div><p className="m-0 fw-bolder mx-1">126</p>
                        <p className="p2">MIS_A/C</p></div>
                        
                    </div>
                    <div className="sub-bus-box">
                        <div className="bus-box"><BsCurrencyDollar/></div>
                        <div><p className="m-0 fw-bolder mx-1">126</p>
                        <p className="p2">Deposits</p></div>
                        
                    </div>
                    <div className="sub-bus-box">
                        <div className="bus-box"><IoCubeOutline/></div>
                        <div className="mx-1"><p className="my-0 fw-bolder ">126</p>
                        <p className="p2">Loans</p></div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}