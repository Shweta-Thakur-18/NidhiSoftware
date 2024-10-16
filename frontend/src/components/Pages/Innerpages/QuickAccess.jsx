import React from "react";
import "./quick.css"

export default function QuickAccess(){
    return(
        <div className="quick">
            <p className="fs-2 fw-bold d-flex justify-content-center">Quick Access</p>
            <div className="quick-box d-flex my-4">
                <div className="sub-quick-box px-2">
                <img src=""/>
                <p className="my-0 fw-bolder">Saving Account</p>
                <p className="p2 p2-sav">Manage Saving Account</p>
                <button className="touch-fetch mx-5">SB Report</button>
                </div>
                <div className="sub-quick-box px-2">
                <img src=""/>
                <p className="my-0 fw-bolder">FD A/C</p>
                <p className="p2 p2-sav">Manage FD Account</p>
                <button className="touch-fetch mx-5">FD Report</button>
                </div>
                <div className="sub-quick-box px-2">
                <img src=""/>
                <p className="my-0 fw-bolder">PIGMY / DD A/C</p>
                <p className="p2 p2-sav">Manage pigmy Account</p>
                <button className="touch-fetch mx-5">DD Report</button>
                </div>
                <div className="sub-quick-box px-2">
                <img src=""/>
                <p className="my-0 fw-bolder">RD Account</p>
                <p className="p2 p2-sav">Manage RD Account</p>
                <button className="touch-fetch mx-5">RD Report</button>
                </div>
                <div className="sub-quick-box px-2">
                <img src=""/>
                <p className="my-0 fw-bolder">Loan Account</p>
                <p className="p2 p2-sav">Manage Loan Account</p>
                <button className="touch-fetch mx-5">Loan Report</button>
                </div>
            </div>
            <div className="quick-box d-flex">
                <div className="sub-quick-box px-2">
                <img src=""/>
                <p className="my-0 fw-bolder">MIS Account</p>
                <p className="p2 p2-sav">Manage MIS Account</p>
                <button className="touch-fetch mx-5">MIS Report</button>
                </div> 
                <div className="sub-quick-box px-2">
                <img src=""/>
                <p className="my-0 fw-bolder">Laser/Accounting</p>
                <p className="p2 p2-sav">Manage Laser/Accounts</p>
                <button className="touch-fetch mx-5">Laser Report</button>
                </div>
                <div className="sub-quick-box px-2">
                <img src=""/>
                <p className="my-0 fw-bolder">Print Account</p>
                <p className="p2 p2-sav">Manage Print Account</p>
                <button className="touch-fetch mx-5">Print Report</button>
                </div>
            </div>
        </div>
    )
}