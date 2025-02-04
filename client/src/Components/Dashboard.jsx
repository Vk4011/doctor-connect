import React, { useState,useEffect } from "react";
import "../Styles/Dashboard.css";
import s from "../assets/s.jpg"
import c from "../assets/chart.png"
import h from "../assets/Hr.png"
import t from "../assets/temperature.png"
const Dashboard = () => {
 
    const userData =   {
      date: "2023-06-28",
      BP: [120, 122, 118, 124, 116],
      HR: [80, 82, 78, 85, 75],
      TEMP: [98.6, 98.4, 98.8, 99.2, 98.7],
    }
    const bp = 98






    

  return (
    <div className="dashboard-main">
      <div className="left-vitals">
        <div className="main-vitals">
          <div className="vital BP">
            <div className="vital-count">
              <h2>Blood Pressure : {userData.BP[1]}</h2>
            </div>
            <div className="vital-graph">
              <img src={c} className="bpchart" alt="" />
            </div>
          </div>
          <div className="vital HR">
          <div className="vital-count">
              <h2>Heart Rate : {"90"}</h2>
            </div>
            <div className="vital-graph">
             <img src={h} alt="" />
            </div>
          </div>
          <div className="vital TEMP">
          <div className="vital-count">
              <h2>Temperature : {"90"}</h2>
            </div>
            <div className="vital-graph">
            <img src={t} alt="" />
            </div>
          </div>
        </div>

        <div className="patient-current-feeling">
            <h1>i am feeling better today than yesterday</h1>
        </div>
      </div>
      <div className="dashboard-right-bio">
        <img className="dash-profile-img" src={s} alt="" />
        <ul>
          <li className="bio-list">Name : {"Fareed"}</li>
          <li className="bio-list">Age : {"20"}</li>
          <li className="bio-list">Gender : {'Male'}</li>
          <li className="bio-list">Disease : {"Kidney problem"}</li>
          <li className="bio-list">prescrtipn : {"something"}</li>
          <li className="bio-list">Date : {"06/06/2023"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
