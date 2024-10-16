import React from "react";
import "./cashdetail.css";
import Sidepanel from "../../Home/Sidepanel";
import Topbar from "../../Home/Topbar";
import Mdashboard from "../Mdashboard/Mdashboard";
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";

export default function Cashdetail() {
    const[cashdetail,setCashDetail] = React.useState({
        cash1:true,
        cash2:false,
        cash3: false,
        cash4: false,
        cash5: false,
        cash6: false
    });
    return (
        <div>
            <Sidepanel />
            <div><Topbar /></div>
            <div className="shift-dashboard"><Mdashboard /></div>
            <div className="sec-shift">
                < div className="cash-heads">
                    <div className={`cash-title ${cashdetail.cash1 ? "cash-active" : ""} `} onClick={() =>
                        setCashDetail({
                            cash1: true,
                            cash2: false,
                            cash3: false,
                            cash4: false,
                            cash5: false,
                            cash6: false
                        })
                    } >
                        <div className="cash-i"><FaRegUser /></div>
                        Profile
                    </div>
                    <div className={`cash-title ${cashdetail.cash2 ? "cash-active" : ""} `} onClick={() =>
                        setCashDetail({
                            cash1: false,
                            cash2: true,
                            cash3: false,
                            cash4: false,
                            cash5: false,
                            cash6: false
                        })
                    } >
                        <div className="cash-i"><FiLock /></div>
                        Cash Deposit
                    </div>
                    <div className={`cash-title ${cashdetail.cash3 ? "cash-active" : ""} `} onClick={() =>
                        setCashDetail({
                            cash1: false,
                            cash2: false,
                            cash3: true,
                            cash4: false,
                            cash5: false,
                            cash6: false
                        })
                    } >
                        <div className="cash-i"><FaRegBookmark /></div>
                        Cash withdrawal
                    </div>
                    <div className={`cash-title ${cashdetail.cash4 ? "cash-active" : ""} `} onClick={() =>
                        setCashDetail({
                            cash1: false,
                            cash2: false,
                            cash3: false,
                            cash4: true,
                            cash5: false,
                            cash6: false
                        })
                    } >
                        <div className="cash-i"><FaRegBell /></div>
                        Fund Transfer
                    </div>
                    <div className="cash-title">
                        <div className="cash-i"><ImAttachment /></div>
                        Loan EMI Deposit
                    </div>
                    <div className="cash-title">
                        <div className="cash-i"><ImAttachment /></div>
                        Mini-Statement
                    </div>
                </div>
                { cashdetail.cash1 && <div className="cash-body">
                    <div className="cash-body-head">Customer Profile</div>
                    <hr></hr>
                    <form className="cash-form">
                        <div className="cash-input">
                            <label>Full Name</label>
                            <input type="text" readOnly value="Anju"></input>
                        </div>
                        <div className="cash-input">
                            <label>Email</label>
                            <input type="text" readOnly value="Anju@gmail.com"></input>
                        </div>
                        <div className="cash-input">
                            <label>Occupation</label>
                            <input type="text" readOnly value="Business"></input>
                        </div>
                        <div className="cash-input">
                            <label>Phone Number</label>
                            <input type="text" readOnly value="987654321"></input>
                        </div>
                        <div className="cash-input">
                            <label>Address</label>
                            <input type="text" readOnly value="Muzaffarpur"></input>
                        </div>
                        <div className="cash-input">
                            <label>State</label>
                            <input type="text" readOnly value="Uttar Pradesh"></input>
                        </div>
                        <div className="cash-input">
                            <label>Zip Code</label>
                            <input type="text" readOnly value="100005"></input>
                        </div>
                    </form>
                </div>}

                {cashdetail.cash2 && <div className="cash-body">
                    <div className="cash-body-head">Cash Deposit</div>
                    <form className="cash-form">
                        <div className="cash-input span-col-2">
                            <label>Select Account</label>
                            <select name="accounts">
                                <option disabled >Select Account</option>
                                <option value="saab">Kotak</option>
                                <option value="mercedes">SBI</option>
                                <option value="audi">Punjab National</option>
                            </select>
                        </div>
                        <div className="cash-input span-col-2">
                            <label>Amount</label>
                            <input type="text" placeholder="Enter Amount"></input>
                        </div>
                        <div className="cash-input span-col-2">
                            <label>Payment Mode</label>
                            <select name="paymentMode">
                                <option disabled >Select Mode</option>
                                <option value="saab">UPI</option>
                                <option value="mercedes">Credit Card</option>
                                <option value="audi">Debit Card</option>
                            </select>
                        </div>
                        <div className="cash-input span-col-2">
                            <label>Remark</label>
                            <input type="text" placeholder="Enter Remark" ></input>
                        </div>

                        <button type="submit"> Submit</button>

                    </form>
                </div>}
                {cashdetail.cash3  && <div className="cash-body">
                    <div className="cash-body-head">Cash Widthdrawal</div>
                    <form className="cash-form">
                        <div className="cash-input span-col-2">
                            <label>Select Account</label>
                            <select name="accounts">
                                <option disabled >Select Account</option>
                                <option value="saab">Kotak</option>
                                <option value="mercedes">SBI</option>
                                <option value="audi">Punjab National</option>
                            </select>
                        </div>
                        <div className="cash-input span-col-2">
                            <label>Amount</label>
                            <input type="text" placeholder="Enter Amount" ></input>
                        </div>
                        <div className="cash-input span-col-2">
                            <label>Payment Mode</label>
                            <select name="paymentMode">
                                <option disabled >Select Mode</option>
                                <option value="saab">UPI</option>
                                <option value="mercedes">Credit Card</option>
                                <option value="audi">Debit Card</option>
                            </select>
                        </div>
                        <div className="cash-input span-col-2">
                            <label>Remark</label>
                            <input type="text" placeholder="Enter Remark" ></input>
                        </div>

                        <button type="submit"> Submit</button>

                    </form>
                </div>}

                {cashdetail.cash4 && <div className="cash-body">
                    <div className="cash-body-head">Fund Transfer</div>
                    <form className="cash-form">
                        <div className="cash-input span-col-2">
                            <label>Select Account</label>
                            <select name="accounts">
                                <option disabled >Select Account</option>
                                <option value="saab">Kotak</option>
                                <option value="mercedes">SBI</option>
                                <option value="audi">Punjab National</option>
                            </select>
                        </div>
                        <div>Customer Account Details</div>
                        <div className="cash-input span-col-2">
                            <label>Beneficiary Type</label>
                            <div className="radio-inputs">
                                <div className="radio-input">
                                    <input type="radio" />
                                    <div>With In Bank</div>
                                </div>
                                <div className="radio-input">
                                    <input type="radio" />
                                    <div>To Other Bank</div>
                                </div>
                            </div>
                        </div>
                        <div className="cash-input span-col-2">
                            <label>Amount</label>
                            <div style ={{"display":"flex" ,"gap":"1rem"}}>
                                <input style={{ "width": "fit-content" }} type="text" placeholder="Enter Amount" ></input>
                                <button > Send OTP</button>
                            </div>
                        </div>
                        <div style ={{"display":"flex","justify-content":"space-between","gap":"1rem"}} className=" span-col-2">
                            <div style={{ "width": "50%" }} className="cash-input">
                                <label>Account No</label>
                                <input type="text" placeholder="Enter Account No." ></input>
                                </div>
                            <div style={{ "width": "50%" }} className="cash-input">
                                <label>Confirm Account No</label>
                                <input type="text" placeholder="Confirm Account No." ></input>
                            </div>
                            
                        </div>
                        <div className="cash-input span-col-2">
                            <label>OTP</label>
                            <input type="text" placeholder="Enter OTP"></input>
                        </div>
                        <div className="cash-input span-col-2">
                            <label>Remark</label>
                            <input type="text" placeholder="Enter Remark"></input>
                        </div>

                        <button type="submit"> Submit</button>

                    </form>
                </div>}
            </div>
        </div>
    )
}