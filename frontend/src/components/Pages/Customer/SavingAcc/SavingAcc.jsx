import React from "react";
import "./SavingAcc.css";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
export default function SavingAcc(){
    return (
        <div className = 'savingAcc'>
            <Sidepanel/>
            <div className = "savingAcc-body">
                <Topbar />
                <div style={{ "margin-top": "7rem" }} className="savingAccform">
                    <h6><b>Open Saving Account</b></h6>
                    <form className="cash-form ">
                        <div className="cash-input">
                            <label>Select Account Type</label>
                            <select name="account-type">
                                <option disabled >Select Account</option>
                                <option value="saab">Kotak</option>
                                <option value="mercedes">SBI</option>
                                <option value="audi">Punjab National</option>
                            </select>
                        </div>
                        <div className="cash-input">
                            <label>User Type</label>
                            <select name="account-type">
                                <option disabled >Select Account</option>
                                <option value="saab">Kotak</option>
                                <option value="mercedes">SBI</option>
                                <option value="audi">Punjab National</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="savingAccform">
                    <h6><b>Product Details</b></h6>
                    <form className="cash-form ">
                        <div className="cash-input">
                            <label>Product Name</label>
                            <input type="text" placeholder="Enter Product Name" ></input>
                        </div>
                        <div className="cash-input">
                            <label>ROI</label>
                            <input type="text" placeholder="Enter ROI" ></input>
                        </div>
                        <div className="cash-input">
                            <label>Minimum Balance</label>
                            <input type="text" placeholder="Enter Min. Balance" ></input>
                        </div>
                    </form>
                </div>
                <div className="savingAccform">
                    <h6><b>Nominee Details</b></h6>
                    <button type="submit"> + Add Nominee</button>
                </div>
                <div className="savingAccform">
                    <h6><b>Review And Submit Account Details</b></h6>
                    <button type="submit">Create an Account</button>
                </div>
                
            </div>
        </div>
    )
}