import React from "react";
import Header from "../admin/header/Header";
import Menu from "../admin/menu/Menu";
// import Footer from "../admin/footer/Footer";
import Footer from "../admin/footer";
import Dashborad from "../../views/admin/dashboard/Dashborad";
import "./dashboard.css";

export default function AdminIndex() {
  return (
    <>
      <div>
        <Header />
        <div className="main-content">
          <Menu />
          <div className="wrapper">
            <Dashborad />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
