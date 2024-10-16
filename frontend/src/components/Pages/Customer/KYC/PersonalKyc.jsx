import React from "react";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import "./kyc.css"
import { IoNewspaper } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

export default function PersonalKyc(){
    return(
        <div>
            <Sidepanel/>
            <div><Topbar/></div>
            <div className="kyc">

            <div className="d-flex custom-box">
                    <div className="icon px-3 "><IoNewspaper/></div>
                    <div><p>Upload E-KYC</p>
                    <p>Setup E-KYC for member</p></div>
                    <div className="icon"><MdArrowForwardIos/></div>
                </div>
            <form className="kyc-form ">
                    <h5>Personal EKYC</h5>
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