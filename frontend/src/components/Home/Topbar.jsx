import React from "react";
import "./Sidepanel.css";
import { LuHome } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { BsArrow90DegDown } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";

export default function Topbar(){
    return(
        <div className="topbar"> 
            <div className="topbar-box">
                <div className="small-div d-flex flex-row">
                    <div><LuHome/><p >Home</p></div>
                    <div className="star"><FaRegStar/></div>
                </div>
                <div className="d-flex sec-div">
                    <div className="d-flex my-2"><BsArrow90DegDown/><p className="fw-medium">Quick Access</p></div>
                    <div className="d-flex my-2 fw-bold"><FaIndianRupeeSign/><p>2891.0</p></div>
                    <div className="d-flex my-2"><IoMoonOutline/></div>
                    <div className="d-flex"><div className=""><p className="m-0 fw-bold">MAHESH SHARMA</p><p>0</p></div>
                    <div className="img-circle"><img src=""/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}