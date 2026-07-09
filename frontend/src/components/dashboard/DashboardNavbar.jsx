import { useNavigate } from "react-router-dom";

export default function DashboardNavbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

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

                <span>Welcome 👋</span>

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