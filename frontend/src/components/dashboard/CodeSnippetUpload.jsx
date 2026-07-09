import { useState } from "react";
import { createSnippet } from "../../services/codeService";

export default function CodeSnippetUpload({ refreshHistory }) {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("Python");
  const [targetLanguage, setTargetLanguage] = useState("Java");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !language || !targetLanguage || !code) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await createSnippet({
        title,
        language,
        target_language: targetLanguage,
        code,
      });

      alert("Snippet uploaded successfully!");

      setTitle("");
      setLanguage("Python");
      setTargetLanguage("Java");
      setCode("");

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
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Snippet"}
        </button>

      </form>

    </div>
  );
}