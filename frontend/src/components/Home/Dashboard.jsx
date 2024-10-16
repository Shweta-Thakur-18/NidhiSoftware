import React from "react";
import Sidepanel from "./Sidepanel";
import Topbar from "./Topbar";
import Mdashboard from "../Pages/Mdashboard/Mdashboard";
import "./Sidepanel.css";
import QuickAccess from "../Pages/Innerpages/QuickAccess";

export default function Dashboard(){
    return(
        <div>
            <Sidepanel/>
            <div><Topbar/></div>
            <div className="shift-dashboard"><Mdashboard/></div>
            <div className="sec-shift"><QuickAccess/></div>
        </div>
    )
}