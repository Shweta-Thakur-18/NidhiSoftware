import React, { useState } from "react";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import Table from "../../Customer/Table/Table";


export default function TransactionReport(){
    const[click,setClick]=useState(false);
    const Handler=()=>{
        setClick(true)
    }
    return(
        <div>
            <Sidepanel/>
            <Topbar/>
            <div className="report ">
                <h4>Customer Report</h4>
                <div className="row">
                <div className="col">
                    <label>From Date</label>
                    <input/>
                </div>
                <div className="col">
                    <label>To Date</label>
                    <input/>
                </div>
                <div className="col">
                    <label>Txn Type:</label>
                    <input placeholder="Name/MID/Mobile/Account No."/>
                </div>
                <button className="col-2" onClick={()=>Handler()}>Submit</button>
                </div>
                
            </div>
            <div className="table-report">
            {click && <Table/>}
            </div>
            
        </div>
    )
}