import React from "react";
import "./PreClosure.css";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
export default function PreClosure(){
    return (
        <div className='PreClosure'>
            <Sidepanel />
            <div className="PreClosure-body">
                <Topbar />
                <div style={{ "margin-top": "7rem" }} className="PreClosureform">
                    <form className="cash-form ">
                        <div className="cash-input">
                            <label>Account No For Pre-Closer</label>
                            <input type="text" placeholder="Enter Loan/Deposit Account" ></input>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="closure-detail">
                    <div className="closure-detail-1">
                        <div className = "cp-cd-1">
                            <div className = "cd-1">GSTIN-</div>
                            <div className = "cd-2">
                                <div><h4><b>MAHESH</b></h4></div>
                                <div>6/340,RHB COLONY, HMH</div>
                                <div>Mobile-8104337565</div>
                                <div>Email - srisaimahesh662@gmail.com</div>

                            </div>
                        </div>
                        <div className = "cp-cd-2">
                            <div className="cd-3">
                                <div><b>ACCOUNT NUMBER</b></div>
                                <div>1010001150089</div>
                            </div>
                            <div className="cd-3">
                                <div><b>ACCOUNT TYPE</b></div>
                                <div>Gold Loan</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Opening Date</b></div>
                                <div>19-10-2022</div>
                            </div>
                            <div className="cd-3">
                                <div><b>ROI</b></div>
                                <div>16.80%</div>
                            </div>
                            <div className="cd-3">
                                <div><b>NOMINEE</b></div>
                                <div>BABITA SHARMA</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Amount</b></div>
                                <div>1000.00</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Actual Maturity Date</b></div>
                                <div>20-03-2023</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Actual Maturity Interest</b></div>
                                <div>0.00</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Branch Name</b></div>
                                <div>HOUSING BOARD</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Status</b></div>
                                <div>Application Generated</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Pre Maturity Date</b></div>
                                <div>20-10-2022</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Total Days</b></div>
                                <div>1 Day</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Pre Maturity Interest</b></div>
                                <div>0.00</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Branch Name</b></div>
                                <div>HOUSING BOARD</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Status </b></div>
                                <div>Application Generated</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Pre Maturity Date</b></div>
                                <div>20-10-2022</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Actual Maturity Amount</b></div>
                                <div>5000.00</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Pre Maturity Amount</b></div>
                                <div>0.00</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Pre Closure Charge</b></div>
                                <div>0.00</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Total Payable Amount</b></div>
                                <div>0.00</div>
                            </div>
                            <div className="cd-3">
                                <div><b>Fund Transfer to Account</b></div>
                                <select name="account-type">
                                    <option disabled >Select Account</option>
                                    <option value="saab">Kotak</option>
                                    <option value="mercedes">SBI</option>
                                    <option value="audi">Punjab National</option>
                                </select>
                            </div>
                            <div className="cd-3">
                                <button> Fore Closure</button>
                            </div>
                        </div>

                        <div className="cp-cd-3">
                            <div><b>Note: </b> This is a computer generated invoice hence no signature is required.</div>
                        </div>
                        
                        

                    </div>
                    <div className="closure-detail-2">
                        <button >Download</button>
                        <button >Print</button>
                    </div>
                </div>

            </div>
        </div>
    )
}