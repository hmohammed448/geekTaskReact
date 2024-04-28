import { useState } from "react";
import navbarStyle from "../css/NavbarHeader.module.css";
import Navlinks from "./Navlinks";
import "../index.css";

const NavbarHeader = () => {
  return (
    <>
      <h1 className={navbarStyle.h1}>Family Wellness</h1>
      <div className="small mb-8">
        <small className="font-extralight text-base font-medium">
          MASSAGE THERAPY
        </small>
      </div>
      <div className={navbarStyle.navbar}>
        <ul>
          <Navlinks />
        </ul>
      </div>
    </>
  );
};
export default NavbarHeader;
