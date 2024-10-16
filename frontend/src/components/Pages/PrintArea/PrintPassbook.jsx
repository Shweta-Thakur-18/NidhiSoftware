import React from "react";
import Sidepanel from "../../Home/Sidepanel";
import Topbar from "../../Home/Topbar";

export default function PrintPassbook(){
    return(
        <div>
            <Sidepanel/>
            <Topbar/>
            <div>
                <div>
                    <div>
                        <label>Account No</label>
                        <input/>
                    </div>
                    <button>Submit</button>
                </div>
                <button>Print</button>
            </div>

        </div>

    )
}