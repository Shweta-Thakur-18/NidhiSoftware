import React from "react";
import Sidepanel from "../../Home/Sidepanel";
import Topbar from "../../Home/Topbar";
import "./Customer.css";
import { FiUser } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import Table from "./Table/Table";


export default function Customer(){
    return (
        <div>
            <Sidepanel/>
            <div><Topbar/></div>
            <div className="customer-searchbar">
                <div className="mx-5 px-5 my-2"><p className="fw-bold lh-1 m-0 p3 fs-5">Search Member</p>
                <p className="p2 mx-3">(Fetch for Transaction)</p></div>
                <input placeholder="Enter Member ID/Mobile/Account" type="text" className="cust-input my-3"/>
                <button className="button-fetch">Fetch Details</button>
            </div>
            <div className="customer-bar2">
            <p className="fw-bolder fs-5 m-1">Daily Business Summary</p>
            <div className="d-flex main-bus-box ">
                    <div className="sub-bus-box d-flex flex-row">
                        <div className="bus-box"><FiUser/></div>
                        <div><p className="m-0 fw-bolder mx-1">126</p>
                        <p className="p2">Member's</p></div>
                        
                    </div>
                    <div className="sub-bus-box d-flex flex-row">
                        <div className="bus-box"><FiUser/></div>
                        <div><p className="m-0 fw-bolder mx-1">126</p>
                        <p className="p2">Member's</p></div>
                        
                    </div>
                    <div className="sub-bus-box d-flex flex-row">
                        <div className="bus-box"><BsCurrencyDollar/></div>
                        <div><p className="m-0 fw-bolder mx-1">126</p>
                        <p className="p2">Deposits</p></div>
                        
                    </div>
                    <div className="sub-bus-box d-flex flex-row">
                        <div className="bus-box"><IoCubeOutline/></div>
                        <div className="mx-1"><p className="my-0 fw-bolder ">126</p>
                        <p className="p2">Loans</p></div>
                        
                    </div>
            </div>
            </div>
            <div className="table"><Table/></div>
            <div className="customer-bar3">
                <div className="d-flex my-2">
                <p className="fw-bold mx-1">Transactions Summary</p>
                <i class='bx bx-dots-vertical-rounded text-end'></i>
                </div>
                <div>
                    <div className="d-flex">

                    <i class='bx bx-shield-minus trend purple'></i>
                    <span className="fw-bold my-2">Cash Deposit</span>
                    <i class='bx bx-rupee text-end'></i>
                    </div>
                    <div className="d-flex ">
                        <i class='bx bx-check trend green'></i> 
                        <span className="fw-bold my-2">Cash Withdrawal</span>
                        <i class='bx bx-rupee text-end'></i>
                    </div>
                    <div className="d-flex ">
                        <i class='bx bx-dollar trend red' ></i>
                        <span className="fw-bold my-2">Fund Transfer</span>
                        <i class='bx bx-rupee text-end'></i>
                    </div>
                    <div className="d-flex ">
                        <i class='bx bx-box trend yellow' ></i>
                        <span className="fw-bold my-2">IMPS/NEFT</span>
                        <i class='bx bx-rupee text-end'></i>
                    </div>
                    <div className="d-flex ">
                        <i class='bx bx-trending-up trend blue' ></i>
                        <span className="fw-bold my-2">Loan EMI Recovered</span>
                        <i class='bx bx-rupee text-end'></i>
                    </div>
                    <div className="d-flex ">
                        <i class='bx bx-trending-up trend blue' ></i>
                        <span className="fw-bold my-2">Deposit Received</span>
                        <i class='bx bx-rupee text-end'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}