export default function UploadTabs({

    activeTab,

    setActiveTab

}) {

    return (

        <div className="upload-tabs">

            <button

                className={activeTab === "code" ? "tab-active" : ""}

                onClick={() => setActiveTab("code")}

            >

                Code Snippet

            </button>

            <button

                className={activeTab === "zip" ? "tab-active" : ""}

                onClick={() => setActiveTab("zip")}

            >

                ZIP Upload

            </button>

            <button

                className={activeTab === "repo" ? "tab-active" : ""}

                onClick={() => setActiveTab("repo")}

            >

                GitHub Repository

            </button>

        </div>

    );

}