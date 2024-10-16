import React from "react";
import Sidepanel from "../../Home/Sidepanel";
import Topbar from "../../Home/Topbar";

export default function AccountStatement(){
    return(
        <div>
            <Sidepanel/>
            <Topbar/>
            <div className="statement-cont ">
                <div><label>Account No</label>
                <input/></div>
                <div><label>From Date</label>
                <input/></div>
                <div><label>To Date</label>
                <input/></div>
                <button>Submit</button>
            </div>
        </div>
    )
}