import { useState } from "react";

import UploadTabs from "./UploadTabs";
import CodeSnippetUpload from "./CodeSnippetUpload";
import ZipUpload from "./ZipUpload";
import RepositoryUpload from "./RepositoryUpload";

import History from "./History";
import Settings from "./Settings";

export default function DashboardHome({ activePage }) {

    const [activeTab, setActiveTab] = useState("code");

    if (activePage === "history") {

        return <History />;

    }

    if (activePage === "settings") {

        return <Settings />;

    }

    return (

        <div className="dashboard-home">

            <UploadTabs

                activeTab={activeTab}

                setActiveTab={setActiveTab}

            />

            {

                activeTab === "code"

                &&

                <CodeSnippetUpload />

            }

            {

                activeTab === "zip"

                &&

                <ZipUpload />

            }

            {

                activeTab === "repo"

                &&

                <RepositoryUpload />

            }

        </div>

    );

}