import { useState } from "react";

export default function ZipUpload() {

    const [file, setFile] = useState(null);

    const handleUpload = (e) => {
        e.preventDefault();

        if (!file) {
            alert("Please select a ZIP file.");
            return;
        }

        console.log(file);

        // TODO:
        // uploadZip(file)
    };

    return (

        <div className="upload-card">

            <h2>Upload ZIP Project</h2>

            <p>
                Upload an entire project as a ZIP archive for AI-powered migration.
            </p>

            <form onSubmit={handleUpload}>

                <input
                    type="file"
                    accept=".zip"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <button type="submit">
                    Upload ZIP
                </button>

            </form>

        </div>

    );

}