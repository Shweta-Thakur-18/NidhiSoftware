import React from "react"
import Sidepanel from "../../../Home/Sidepanel"
import Topbar from "../../../Home/Topbar";
import "./ApplyLoan.css";

export default function ApplyLoan(){
    return(
        <div>
            <Sidepanel/>
            <Topbar/>
            <div>
                <div className="first-box">
                    <h5>Open Group Loan</h5>
                    <div className="row">
                    <div className="col-5">
                        <div><label>Select Group Loan Type</label>
                        <select name="account-type">
                                <option disabled >Select Account</option>
                                <option value="saab">Kotak</option>
                                <option value="mercedes">SBI</option>
                                <option value="audi">Punjab National</option>
                        </select></div>
                        <div><label>Select Group </label>
                        <select name="account-type">
                                <option disabled >0</option>
                                <option value="saab">Kotak</option>
                                <option value="mercedes">SBI</option>
                                <option value="audi">Punjab National</option>
                        </select></div>
                        <div><label>Group Head Memeber ID</label>
                        <input placeholder="Enter Group Head Memeber ID"/></div>
                        <div className="row gap-2">
                            <div className="col"><label>Amount</label><input placeholder="0"/></div>
                            <div className="col"><label>Frequency</label><input placeholder="0"/></div>
                        </div>
                        <div><label>Tenure</label>
                        <input/></div>
                    </div>
                    <div className="col-7 row">
                    <div className="col">
                        <div><label>Product Name</label>
                        <input placeholder="GroupLoan"/></div>
                        <div><label>Product Name</label>
                        <input placeholder="GroupLoan"/></div>
                    </div>
                    <div className="col">
                    <div><label>Product Name</label>
                        <input placeholder="GroupLoan"/></div>
                        <div><label>Product Name</label>
                        <input placeholder="GroupLoan"/></div>
                    </div>
                    <div className="dub-dub-box">
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
                

                </div>
                <div className=" second-box">
                    <h5>Group Loan Details</h5>
                </div>
                <div className="  third-box">
                    <h5>Apply Loan Details</h5>
                </div>
            </div>
        </div>
    )
}