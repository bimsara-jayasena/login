import logo from "./logo.svg";
import "./App.css";
import SignInSide from "./Pages/Home/sign-in-side/SignInSide";
import { Routes, Route } from "react-router";
import RegisterNew from "./Pages/Register/Main/RegisterNew";
import PetientReg from "./Pages/Register/Petient/PetientReg";
import NurseReg from "./Pages/Register/Nurse/NurseReg";
import Dashboard from "./Pages/Dashboards/MLT/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <SignInSide />} />
        <Route path="/Register" element={ <RegisterNew />} />
        <Route path="/Register/Petient" element={ <PetientReg />} />
        <Route path="/Register/Nurse" element={ <RegisterNew />} />
        <Route path="/MLT/Dashboard" element={ <Dashboard/>} />
      </Routes>
     
    </div>
  );
}

export default App;
