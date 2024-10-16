import React from "react";
import img1 from "../images/Logo.jpg"
import "./Sidepanel.css";
import { CiSquarePlus } from "react-icons/ci";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from "react-router-dom";


export default function Sidepanel() {
    const sidebar = <Sidebar width="18rem" backgroundColor="white" >
  <Menu >
        <Link to= "/customer" className="links"><SubMenu label="Customer/Members"
    icon={<CiSquarePlus/>} >
          <Link to= "/customerdetail" className="links"><MenuItem>Create Customer</MenuItem></Link>
          <Link to="/accountdetail" className="links"><MenuItem>Customer Details</MenuItem></Link>
          <Link to="/customerReport" className="links"><MenuItem>Customer Report</MenuItem></Link>
          <Link to="/cashdetail" className="links"><MenuItem>Upload KYC</MenuItem></Link>
    </SubMenu></Link>
    <SubMenu label="Banking"
    icon={<CiSquarePlus/>}>
      <Link to="/sharetransfer" className="links"><MenuItem>Share Transfer</MenuItem></Link>
      <Link to="/sharetransfer" className="links"><MenuItem>Withdraw Share</MenuItem></Link>
      <Link to="/savingsaccount" className="links"><MenuItem>Shaving A/c</MenuItem></Link>
      <Link to="/savingreport" className="links"><MenuItem>Shaving A/c report</MenuItem></Link>
      <Link to="/rdacc" className="links"><MenuItem>Recurring Deposit</MenuItem></Link>
      <Link to="/RecurringReport" className="links"><MenuItem>Recurring Report</MenuItem></Link>
      <Link to="/PayMaturity" className="links"><MenuItem>Pay Maturity</MenuItem></Link>
      <Link to="/PayDeposits" className="links"><MenuItem>Regular Deposit</MenuItem></Link>
    </SubMenu>
    <SubMenu label="LOAN/Advances"
    icon={<CiSquarePlus/>}>
      <Link to="/loan" className="links" ><MenuItem>Create Loan</MenuItem></Link>
      <Link to="/ekycloan" className="links" ><MenuItem>Upload Loan Document</MenuItem></Link>
      <Link to="/overduecal" className="links" ><MenuItem>Overdue Interest</MenuItem></Link>
      <Link to="/emidue" className="links" ><MenuItem>EMI Due Report</MenuItem></Link>
      <Link to="/rdacc" className="links" ><MenuItem>Loan Report</MenuItem></Link>
      <Link to="/rejectloan" className="links" ><MenuItem>Rejected Loan Application</MenuItem></Link>
      <Link to="/loanrepayment" className="links" ><MenuItem>Loan Repayment</MenuItem></Link>
    </SubMenu>
    <SubMenu label="TRANSACTION"
    icon={<CiSquarePlus/>}>
      <Link to="/preclosure" className="links" ><MenuItem>Pre-Closure</MenuItem></Link>
      <Link to="/payemi" className="links" ><MenuItem>Pay Loan EMI</MenuItem></Link>
      <Link to="/rdacc" className="links" ><MenuItem>Debit Bulk Loan EMI</MenuItem></Link>
      <Link to="/transactionreport" className="links" ><MenuItem>Transaction Report</MenuItem></Link>
      <Link to="/rdacc" className="links" ><MenuItem>E-NACH Transaction</MenuItem></Link>
      <Link to="/rdacc" className="links" ><MenuItem>E-NACH Transaction</MenuItem></Link>
      <Link to="/payemi" className="links" ><MenuItem>Pay EMI</MenuItem></Link>
    </SubMenu>
    <SubMenu label="PRINT AREA"
    icon={<CiSquarePlus/>}>
      <Link to="/fdbond" className="links" ><MenuItem>FD Bond</MenuItem></Link>
      <Link to="/rdbond" className="links" ><MenuItem>RD Bond</MenuItem></Link>
      <Link to="/rdbond" className="links" ><MenuItem>PIGMY Bond</MenuItem></Link>
      <Link to="/statement" className="links" ><MenuItem>Account Statement</MenuItem></Link>
      <Link to="/printpassbook" className="links" ><MenuItem>Print Passbook</MenuItem></Link>
      <Link to="/allpassbook" className="links" ><MenuItem>FD/RD/DD Passbook</MenuItem></Link>
    </SubMenu>
    <SubMenu label="UTILITY SERVICE"
    icon={<CiSquarePlus/>}>
      <Link to="/creaditscore" className="links" ><MenuItem>Creadit Score</MenuItem></Link>
      <Link to="/documentverification" className="links" ><MenuItem>Document Verification Service</MenuItem></Link>
      <Link to="/rdbond" className="links" ><MenuItem>Interest Rate Calculation Service:</MenuItem></Link>
      <Link to="/statement" className="links" ><MenuItem>Application Status Tracking</MenuItem></Link>
      <Link to="/printpassbook" className="links" ><MenuItem>Print Passbook</MenuItem></Link>
      <Link to="/allpassbook" className="links" ><MenuItem>FD/RD/DD Passbook</MenuItem></Link>
    </SubMenu>
    <SubMenu label="Change Password"
    icon={<CiSquarePlus/>}>
    <Link to="/changepass" className="links" ><MenuItem>New Password</MenuItem></Link>
  
    </SubMenu>
    <SubMenu label="Change PIN"
    icon={<CiSquarePlus/>}>
       <Link to="/changepin" className="links" ><MenuItem>Change pin</MenuItem></Link>
    </SubMenu>
   
    <SubMenu label="GROUP LOAN"
    icon={<CiSquarePlus/>}>
          <Link to="/creategroup" className="links" ><MenuItem>Create Group</MenuItem></Link>
          <Link to="/applyloan" className="links" ><MenuItem>Apply Loan</MenuItem></Link>
    </SubMenu>
    </Menu>
   </Sidebar>;
    return (
        <div className="sidepanel">
            <img className="img1" src={img1} alt="" />

            <div className="sidebar">{sidebar}</div>

        </div>
    )
}