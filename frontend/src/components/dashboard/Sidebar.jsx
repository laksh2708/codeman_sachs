export default function Sidebar({ activePage, setActivePage }) {

    return (

        <aside className="dashboard-sidebar">

            <h3>Workspace</h3>

            <button
                className={activePage === "migration" ? "sidebar-active" : ""}
                onClick={() => setActivePage("migration")}
            >
                New Migration
            </button>

            <button
                className={activePage === "history" ? "sidebar-active" : ""}
                onClick={() => setActivePage("history")}
            >
                History
            </button>

            <button
                className={activePage === "settings" ? "sidebar-active" : ""}
                onClick={() => setActivePage("settings")}
            >
                Settings
            </button>

        </aside>

    );

}