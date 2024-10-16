import React from "react";
import Sidepanel from "../../Home/Sidepanel";
import Topbar from "../../Home/Topbar";
import "./printarea.css";

export default function FD(){
    return(
        <div>
            <Sidepanel/>
            <Topbar/>
            <div className="fd">
                <div className="row">
                <div className="col-4">
                    <label>Account No</label>
                    <input />
                </div>
                <button className="col-2 my-3">Submit</button>
                </div>
                
                <div>
                <label>Print</label>
                <button>Download</button>
                </div>
            </div>
            
        </div>
    )
}