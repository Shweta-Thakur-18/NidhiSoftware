import logo from './logo.svg';
import './App.css';
import Login from './components/authenticate/Login';
import Signup from './components/authenticate/Signup';
import Sidepanel from './components/Home/Sidepanel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Home/Dashboard';
import Cashdetail from "./components/Pages/Cashdetail/Cashdetail";
import Customer from './components/Pages/Customer/Customer';
import Kyc from './components/Pages/Customer/KYC/Kyc';
import Customerdetail from "./components/Pages/Customer/CustomerDetails/Customerdetail";
import PersonalKyc from './components/Pages/Customer/KYC/PersonalKyc';
import AccDetails from './components/Pages/Customer/CustomerAccDetails/AccDetails';
import SavingAcc from "./components/Pages/Customer/SavingAcc/SavingAcc"
import ShareTrans from "./components/Pages/Customer/ShareTrans/ShareTrans"
import Rdacc from './components/Pages/Customer/RDAcc/Rdacc';
import PreClosure from "./components/Pages/Transaction/PreClosure/PreClosure";
import PayEMI from "./components/Pages/Transaction/PayEMI/PayEMI";
import Return from './components/Return';
import Loan from './components/Pages/Loan/Loan';
import EKYCLoan from './components/Pages/Loan/EKYCLoan';
import FD from './components/Pages/PrintArea/FD';
import RD from './components/Pages/PrintArea/RD';
import AccountStatement from './components/Pages/PrintArea/AccountStatement';
import PrintPassbook from './components/Pages/PrintArea/PrintPassbook';
import FDPassbook from './components/Pages/PrintArea/FDPassbook';
import Report from './components/Pages/Customer/CustomerReport/Report';
import SavingReport from './components/Pages/Customer/SavingReport/SavingReport';
import TransactionReport from './components/Pages/Transaction/TransactionReport/TransactionReport';
import CreateGroup from './components/Pages/GroupLoan/CreateGroup/CreateGroup';
import ApplyLoan from './components/Pages/GroupLoan/ApplyLoan/ApplyLoan';
import Otp from './components/authenticate/Otp';
import RecurringReport from './components/Pages/Customer/RecurringReport/RecurringReport';
import PayMaturity from './components/Pages/Customer/PayMaturity/PayMaturity';
import PayDeposits from './components/Pages/Customer/PayDeposite/PayDeposits';
import OverdueInterestCalculator from './components/Pages/Loan/OverDue/OverDueCal';
import EmiDueCalculator from './components/Pages/Loan/EmiDue/EmiDue';
import RejectedLoans from './components/Pages/Loan/Rejected loans/RejectedLoans';
import LoanRepayment from './components/Pages/Loan/LoanRepamant/LoanRepamant';
import ChangePassword from './components/Pages/Chnagepass/ChangePass';
import CreditScoreCheck from './components/Pages/Utility/Creadit score/CraditScore';
import DocumentVerificationService from './components/Pages/Utility/DocumentVerification/DocumentVerification';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/cashdetail' element={<Cashdetail />} />
        <Route path='/customer' element={<Customer/>} />
        <Route path='/kyc' element={<Kyc/>}/>
        <Route path ="/personalkyc" element = {<PersonalKyc/>}/>
        <Route path ="/customerdetail" element = {<Customerdetail/>}/>
        <Route path ="/accountdetail" element = {<AccDetails/>}/>
        <Route path ="/customerReport" element = {<Report/>}/>
        <Route path="/savingsaccount" element={<SavingAcc />} />
        <Route path="/savingreport" element={<SavingReport />} />
        <Route path="/sharetransfer" element={<ShareTrans />} />
        <Route path="/rdacc" element={<Rdacc />} />
        <Route path="/RecurringReport" element={<RecurringReport />}/>
        <Route path="/PayMaturity" element={<PayMaturity/>}/>
        <Route path="/PayDeposits" element={<PayDeposits/>}/>
        <Route path="/preclosure" element={<PreClosure />} />
        <Route path="/payemi" element={<PayEMI />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/ekycloan" element={<EKYCLoan />} />
        <Route path="/overduecal" element={<OverdueInterestCalculator/>}/>
        <Route path="/emidue" element={<EmiDueCalculator/>}/>
        <Route path="/rejectloan" element={<RejectedLoans/>}/>
        <Route path="/fdbond" element={<FD />} />
        <Route path="/rdbond" element={<RD />} />
        <Route path="/statement" element={<AccountStatement />} />
        <Route path="/printpassbook" element={<PrintPassbook />} />
        <Route path="/allpassbook" element={<FDPassbook />} />
        <Route path="/transactionreport" element={<TransactionReport />} />
        <Route path="/creategroup" element={<CreateGroup />} />
        <Route path="/applyloan" element={<ApplyLoan />} />
        <Route path="/loanrepayment" element={<LoanRepayment/>}/>
        <Route path="/changepass" element={<ChangePassword/>}/>
        <Route path="/creaditscore" element={<CreditScoreCheck/>}/>
        <Route path="/documentverification" element={<DocumentVerificationService/>}/>
      </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
