import React,{useState} from "react";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import { LuUser } from "react-icons/lu";
import { IoNewspaper } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import "./kyc.css"
import {Link, useNavigate} from "react-router-dom";

export default function Kyc(){
    const navigate=useNavigate();
    const[item,setItem]=useState("item2");
    const handleClick=(item)=>{
        setItem(item);
        if(item==="item1"){
            navigate("/customerdetail");

        }
    }
    return(
        <div>
            <Sidepanel/>
            <div><Topbar/></div>
            <div className="kyc">
                <div className="d-flex">
                <div className="d-flex custom-box" onClick={() => handleClick('item1')} style={{ color: item === 'item1' ? 'blue' : 'inherit' }}>
                    <div className="icon px-3 top-icon" ><LuUser/></div>
                    <div><p>Customer Information</p>
                    <p>Enter Customer Personal Information</p></div>
                    <div className="icon"><MdArrowForwardIos/></div>
                </div>
                <div className="d-flex custom-box" onClick={() => handleClick('item2')} style={{ color: item === 'item2' ? 'blue' : 'inherit' }}>
                    <div className="icon px-3 " ><IoNewspaper/></div>
                    <div><p style={{fontWeight:"bold",fontSize:"0.8rem"}}>Upload E-KYC</p>
                    <p>Setup E-KYC for member</p></div>
                    <div className="icon"><MdArrowForwardIos/></div>
                </div>
                </div>
                <form className="kyc-form">
                    <h5>Customer EKYC</h5>
                    <p>Upload the KYC document of customer</p>
                    <div className="d-flex gap-5">
                    <div className="d-flex flex-column gap-4">
                        <div><label>AADHAR CARD</label>
                        <div className="d-flex upload-div"><input type="file"></input>
                        <button className="upload-button">Upload</button></div>
                        </div>
                        
                        <div><label>PHOTO</label>
                       <div className="d-flex upload-div"><input type="file"></input>
                        <button className="upload-button">Upload</button></div>
                        </div>
                        <div><label>Electricity Bill</label>
                       <div className="d-flex upload-div"><input type="file"></input>
                        <button className="upload-button">Upload</button></div>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-4">
                        <div><label>PAN CARD</label>
                       <div className="d-flex upload-div"><input type="file"></input>
                        <button className="upload-button">Upload</button></div>
                        </div>
                        <div><label>Signature</label>
                       <div className="d-flex upload-div"><input type="file"></input>
                        <button className="upload-button">Upload</button></div>
                        </div>
                    </div>
                    </div>
                    
                </form>
                

            </div>
        </div>
    )
} 