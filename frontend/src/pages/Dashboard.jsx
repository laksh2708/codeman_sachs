import { useState } from "react";

import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardHome from "../components/dashboard/DashboardHome";

import "../styles/dashboard.css";

export default function Dashboard() {

    const [activePage, setActivePage] = useState("migration");

    return (

        <div className="dashboard-page">

            <DashboardNavbar />

            <div className="dashboard-body">

                <Sidebar
                    activePage={activePage}
                    setActivePage={setActivePage}
                />

                <div className="dashboard-content">

                    <DashboardHome
                        activePage={activePage}
                    />

                </div>

            </div>

        </div>

    );

}