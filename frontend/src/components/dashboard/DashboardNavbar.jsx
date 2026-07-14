import { useNavigate } from "react-router-dom";

export default function DashboardNavbar() {

    const navigate = useNavigate();

    const userName = localStorage.getItem("userName") || "Developer";

    const logout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (!confirmLogout) return;
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        alert("Logged out successfully.");
        navigate("/");
    };

    return (

        <header className="dashboard-navbar">

            <div className="dashboard-logo">

                <div className="dashboard-logo-circle">
                    C
                </div>

                <div>

                    <h2>CodeMan Sachs</h2>

                    <p>AI Code Migration Platform</p>

                </div>

            </div>

            <div className="dashboard-user">

                <span>👋 Welcome,&nbsp;
                    <strong>{userName}</strong></span>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </header>

    );

}