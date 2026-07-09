import { useEffect, useState } from "react";

import {
  getAllSnippets,
} from "../../services/codeService";

import SnippetCard from "./SnippetCard";
import LoadingSpinner from "./LoadingSpinner";
import EmptyState from "./EmptyState";

export default function History() {

  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHistory = async () => {

    try {

      setLoading(true);

      const response = await getAllSnippets();

      setSnippets(response.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadHistory();

  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (snippets.length === 0) {
    return <EmptyState />;
  }

  return (

    <div className="history-container">

      <div className="history-header">

        <h2>Recent Code Snippets</h2>

        <button
          className="refresh-btn"
          onClick={loadHistory}
        >
          Refresh
        </button>

      </div>

      <div className="snippet-grid">

        {

          snippets.map((snippet) => (

            <SnippetCard
              key={snippet.id}
              snippet={snippet}
              refreshHistory={loadHistory}
            />

          ))

        }

      </div>

    </div>

  );

}