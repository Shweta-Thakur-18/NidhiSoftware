import React from "react";
import "./PayEMI.css";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
export default function PayEMI() {
    return (
        <div className='PreClosure'>
            <Sidepanel />
            <div className="PreClosure-body">
                <Topbar />
                <div style={{ "margin-top": "7rem" }} className="PayEMIform">
                    <div className= "emi-1">
                        <div>Enter Account No.</div>
                        <div>
                            <form>
                            <input type ="text"/>
                            <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="emi-2">
                        <div className="emi-2-1">
                            <form>
                                <label>EMI Amount</label>
                                <input type="text" value ="0" readOnly />
                                <label>Penalty Amount</label>
                                <input type="text" value ="0" readOnly />
                                <button type="submit">Pay EMI</button>
                            </form>
                        </div>
                        <div className="emi-2-2">
                            <div>
                                <label>Member Id</label>
                                <input type="text" value="C192" readOnly />
                            </div>
                            <div>
                                <label>Customer Name</label>
                                <input type="text" value="Varun" readOnly />
                            </div>
                            <div>
                                <label>Plan Type</label>
                                <input type="text" value="PIGMY ACOOUNT" readOnly />
                            </div>
                            
                            <div>
                                <label>Plan Name</label>
                                <input type="text" value="Regular Deposit" readOnly />
                            </div>
                            
                            <div>
                                <label>Customer Mobile no</label>
                                <input type="text" value="860369366" readOnly />
                            </div>
                            <div>
                                <label> Branch Name</label>
                                <input type="text" value="Housing Board" readOnly />
                            </div>
                            
                            <div>
                                <label>Creation Date</label>
                                <input type="text" value="19-10-2022 17:58:06" readOnly />
                            </div>
                            <div>
                                <label> Created By</label>
                                <input type="text" value="Rahul Kumar" readOnly />
                            </div>
                            
                            <div>
                                <label>Maturity Amount</label>
                                <input type="text" value="0.00" readOnly />
                            </div>


                        </div>
                    </div>
                    <div className="emi-3"></div>
                </div>
            </div>
        </div>
    )
}