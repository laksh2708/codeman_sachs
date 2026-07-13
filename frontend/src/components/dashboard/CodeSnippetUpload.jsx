import { useState } from "react";
import { createSnippet } from "../../services/codeService";
import { startMigration } from "../../services/migrationService";

export default function CodeSnippetUpload({ refreshHistory }) {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("Python");
  const [targetLanguage, setTargetLanguage] = useState("Java");
  const [originalCode, setOriginalCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMigrate, setLoadingMigrate] = useState(false);

  const clearForm = () => {
    setTitle("");
    setLanguage("Python");
    setTargetLanguage("Java");
    setOriginalCode("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !language || !targetLanguage || !originalCode) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await createSnippet({
        title,
        language,
        target_language: targetLanguage,
        original_code: originalCode,
      });

      alert("Snippet uploaded successfully!");

      clearForm();

      if (refreshHistory) {
        refreshHistory();
      }
    } catch (error) {
      console.error(error);
      alert("Failed to upload snippet.");
    } finally {
      setLoading(false);
    }
  };

  const handleUploadAndMigrate = async () => {
    if (!title || !language || !targetLanguage || !originalCode) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoadingMigrate(true);

      const response = await createSnippet({
        title,
        language,
        target_language: targetLanguage,
        original_code: originalCode,
      });

      const codeId = response.data?.id;
      if (!codeId) {
        throw new Error("Unable to determine code ID after upload.");
      }

      await startMigration(codeId);
      alert("Uploaded successfully and migration started.");
      clearForm();

      if (refreshHistory) {
        refreshHistory();
      }
    } catch (error) {
      console.error(error);
      alert("Failed to upload and migrate snippet.");
    } finally {
      setLoadingMigrate(false);
    }
  };

  return (
    <div className="snippet-upload-card">

      <h2>Upload Code Snippet</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Snippet Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="language-row">

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>Python</option>
            <option>Java</option>
            <option>JavaScript</option>
            <option>C++</option>
            <option>C#</option>
            <option>Go</option>
          </select>

          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option>Java</option>
            <option>Python</option>
            <option>JavaScript</option>
            <option>C++</option>
            <option>C#</option>
            <option>Go</option>
          </select>

        </div>

        <textarea
          rows={18}
          placeholder="Paste your source code..."
          value={originalCode}
          onChange={(e) => setOriginalCode(e.target.value)}
        />

        <div className="form-actions">
          <button
            type="button"
            disabled={loading || loadingMigrate}
            onClick={handleUploadAndMigrate}
          >
            {loadingMigrate ? "Uploading & Migrating…" : "Upload & Migrate"}
          </button>
        </div>

      </form>

    </div>
  );
}