import React from "react";
import "./CreateGroup.css";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import { FaRegEdit } from "react-icons/fa";

export default function CreateGroup(){
    const loanGroups = [
        {
            name: "TATA group",
            memID: "M101,M102,M103",
        },
        {
            name: "ADANI group",
            memID: "M101",
        },
        {
            name: "RELAINCE group",
            memID: "M101,M102,M103,M104",
        },
        {
            name: "BAJAJ group",
            memID: "M101,M103,M105",
        },
        {
            name: "ITC group",
            memID: "M103",
        },
        {
            name: "BIRLA group",
            memID: "M102,M104,M106",
        }
    ]
    return (
        <div className="all"> 
            <Sidepanel />
            <div className="all-1">
                <Topbar />
                <div className="create-group">
                    <h6><b>Create Group</b></h6>
                    <form className="cash-form loan-form">
                        <div className="cash-input">
                            <label>Group Name:</label>
                            <input type="text"  placeholder="Enter Group Name"></input>
                        </div>
                        <div className="cash-input">
                            <label>ADD Member:</label>
                            <select name="accounts">
                                <option disabled >Select Member</option>
                                <option value="M1101">M1101</option>
                                <option value="M1102">M1102</option>
                                <option value="M1103">M1103</option>
                            </select>
                        </div>
                        <button type="submit"> Submit</button>
                    </form>
                    <div className="table-2">
                        <div className="table-data">
                            <div><b>EDIT</b></div>
                            <div className="span-4"><b>GROUP NAME</b></div>
                            <div><b>MEMBER ID</b></div>
                        </div>
                        
                        {
                            loanGroups.map((loanGroup) => {
                                return (
                                    <div className="table-data-1">
                                        <div className="edit"><FaRegEdit /></div>
                                        <div className="span-4">{loanGroup.name}</div>
                                        <div>{loanGroup.memID}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}