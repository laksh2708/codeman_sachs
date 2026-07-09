import { useState } from "react";

export default function RepositoryUpload() {

    const [repoUrl, setRepoUrl] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!repoUrl.trim()) {

            alert("Please enter a GitHub Repository URL.");

            return;

        }

        console.log(repoUrl);

        // TODO:
        // analyzeRepository(repoUrl)

    };

    return (

        <div className="upload-card">

            <h2>Repository Migration</h2>

            <p>

                Paste a GitHub repository URL to analyze and migrate your project.

            </p>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="https://github.com/user/project"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                />

                <button type="submit">

                    Analyze Repository

                </button>

            </form>

        </div>

    );

}