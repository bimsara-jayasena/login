import React from "react";
import './reg-style.css'
import { Box } from "@mui/material";
import UserCard from "../../../Components/Cards/UserCard";
import NurseCard from "../../../Components/Cards/NurseCard";
import { Link } from "react-router";
const RegisterNew = () => {
  return (
  <section className="parent-container">
    <section className="reg-header">
            Register 
    </section>
    <section className="reg-body">
       <Link to={'/Register/Petient'} style={{textDecoration:'none'}}><UserCard/></Link>
       <Link to={'/Register/Nurse'} style={{textDecoration:'none'}}><NurseCard/></Link>
    </section>
    <section className="reg-footer">
            footer
    </section>
  </section>)
};
export default RegisterNew;
