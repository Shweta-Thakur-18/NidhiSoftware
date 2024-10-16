import React from "react";
import "./ShareTrans.css";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
export default function ShareTrans(){
    return(
        <div className='shareTransAcc'>
            <Sidepanel />
            <div className="shareTrans-body">
                <Topbar />
                <div className="shareTransform">
                    <h5><b>Share Transfer</b></h5>
                    <form className="cash-form ">
                        <div className="cash-input">
                            <label>Member ID</label>
                            <input type="text" placeholder="Enter Member ID" ></input>
                        </div>
                        <div className="cash-input">
                            <label>Avl. Share Of Company</label>
                            <input type="text" placeholder="Enter Avl. Share" ></input>
                        </div>
                        <div className="cash-input">
                            <label>Each Share Value</label>
                            <input type="text" placeholder="Enter Share Value" ></input>
                        </div>
                        <div className="cash-input">
                            <label>Payment Mode</label>
                            <select name="account-type">
                                <option disabled >Select Account</option>
                                <option value="saab">Kotak</option>
                                <option value="mercedes">SBI</option>
                                <option value="audi">Punjab National</option>
                            </select>
                        </div>
                        <div className="cash-input">
                            <label>Payable Amount</label>
                            <input type="text" placeholder="0" ></input>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                
                

            </div>
        </div>
    )
}