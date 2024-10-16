import React, { useState } from "react";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import "./AccDetails.css";
import Table from "../Table/Table";

export default function AccDetails() {
    const[click,setClick]=useState(false);
    const Handler=()=>{
        setClick(true)
    }
    return (
        <div>
            <Sidepanel />
            <Topbar />
            <div>
                <div className="acc-detail">
                    <h5>Search Customer Account Details:</h5>
                    <div className="row">
                    <div className="col-4"><label>Member ID</label>
                        <input type="txt" /></div>
                    <button className="col-2 acc-button" onClick={()=>Handler()}>Search</button>
                    </div>
                </div>
                <div className="table-acc">
                {click && <Table/>}
                </div>
            </div>
        </div>
    )
}