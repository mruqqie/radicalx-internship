import React from "react";
import RadicallX from "./RadicallX-Black-Logo.png";
import dashboard from "./dashboard.svg";
import medal_star from "./medal-star.svg";
import book from "./book.svg";
import briefcase from "./briefcase.svg";
import setting from "./setting.svg";


function SideBar() {
    return(
        <div className="sidebar">
            <div className="top--side">
                <img src={RadicallX} alt="RadicalX Logo"/>
                <div className="options">
                    <div className="op">
                        <img src={dashboard} alt="Dashboard"/>
                        <p>Dashboard</p>
                    </div>
                    <div className="op">
                        <img src={medal_star} alt="Medal Star"/>
                        <p>Apprenterships</p>
                    </div>
                    <div className="op" id="internships">
                        <img src={book} alt="Book"/>
                        <p>Internships</p>
                    </div>
                    <div className="op">
                        <img src={briefcase} alt="Briefcase"/>
                        <p>Jobs</p>
                    </div>
                    <div className="op">
                        <img src={setting} alt="setting"/>
                        <p>Settings</p>
                    </div>
                </div>
            </div>
            <div className="bottom--side">
                <div className="rectangle"/>
                <p>Adam Scott</p>
            </div>
        </div>
    )
}

export default SideBar;