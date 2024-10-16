import React from "react";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import "./Rdacc.css";

export default function Rdacc(){
    return(
        <div>
            <Sidepanel/>
            <Topbar/>
            <div className="rd-container">
                <div className="search-box">
                <h5>Open Recurring Deposit</h5>
                <div className="row">
                <div className="col-4">
                    <label>Select RD Account Type</label>
                    <input>
                    </input>
                    <label>Member ID</label>
                    <input></input>
                </div>
                <div className="col">
                    <div className="row">
                    <div className="col"><button style={{background:"blue"}}>VIEW EMI</button></div>
                    <div className="col"><button style={{background:"orange"}}>MONTLY DEPOSIT AMOUNT</button></div>
                    <div className="col"><button style={{background:"green"}}>MATURITY AMOUNT</button></div>
                    <div className="col"><button style={{background:"green"}}>TOTAL PAYMENT</button>
                    principle + interest</div>
                    </div>
                    <div className="row">
                        <p className="col">View Emi</p>
                        <p className="col">0</p>
                        <p className="col">0</p>
                        <p className="col">0</p>
                    </div>
                    
                </div>
                </div>
                

                </div>
                <div className="member-con my-2" >
                    <h5>Member Details</h5>
                    <div className="row ">
                    <div className="col">
                        <div>
                            <label>Name</label>
                            <input></input>
                        </div>
                        <div>
                            <label>Mobile</label>
                            <input></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input></input>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <label>Branch Name</label>
                            <input></input>
                        </div>
                        <div>
                            <label>Pan</label>
                            <input></input>
                        </div>
                        <div>
                            <label>Aadhar</label>
                            <input></input>
                        </div>
                        <div>
                            <label>Martial</label>
                            <input></input>
                        </div>

                    </div>
                    <div className="col">
                    <div>
                            <label>Address</label>
                            <input></input>
                        </div>
                        <div>
                            <label>Occuption</label>
                            <input></input>
                        </div>
                        <div>
                            <label>Age</label>
                            <input></input>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="search-box my-2">
                    <h5>Nominee Details</h5>

                </div>
                <div className="search-box my-2">
                    <h5>Submit and Reveiw Account Details</h5>
                    <button style={{background:"blue"}}> Create Account</button>
                </div>
            </div>
        </div>
    )
}