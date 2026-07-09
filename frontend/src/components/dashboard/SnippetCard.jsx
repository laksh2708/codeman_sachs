import { useState } from "react";

import ViewSnippetModal from "./ViewSnippetModal";
import EditSnippetModal from "./EditSnippetModal";
import DeleteConfirmation from "./DeleteConfirmation";

export default function SnippetCard({

  snippet,

  refreshHistory,

}) {

  const [showView, setShowView] = useState(false);

  const [showEdit, setShowEdit] = useState(false);

  const [showDelete, setShowDelete] = useState(false);

  return (

    <>

      <div className="snippet-card">

        <div className="snippet-top">

          <h3>

            {snippet.title}

          </h3>

          <span className="snippet-id">

            #{snippet.id}

          </span>

        </div>

        <div className="snippet-info">

          <p>

            <strong>Source :</strong>

            {snippet.language}

          </p>

          <p>

            <strong>Target :</strong>

            {snippet.target_language}

          </p>

          <p>

            <strong>Created :</strong>

            {

              snippet.created_at
                ? new Date(snippet.created_at).toLocaleString()
                : "N/A"

            }

          </p>

        </div>

        <div className="snippet-preview">

          {

            snippet.original_code.length > 180

              ? snippet.original_code.substring(0, 180) + "..."

              : snippet.original_code

          }

        </div>

        <div className="snippet-actions">

          <button
            className="view-btn"
            onClick={() => setShowView(true)}
          >
            View
          </button>

          <button
            className="edit-btn"
            onClick={() => setShowEdit(true)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => setShowDelete(true)}
          >
            Delete
          </button>

        </div>

      </div>

      {

        showView && (

          <ViewSnippetModal

            snippetId={snippet.id}

            close={() => setShowView(false)}

          />

        )

      }

      {

        showEdit && (

          <EditSnippetModal

            snippet={snippet}

            refreshHistory={refreshHistory}

            close={() => setShowEdit(false)}

          />

        )

      }

      {

        showDelete && (

          <DeleteConfirmation

            snippet={snippet}

            refreshHistory={refreshHistory}

            close={() => setShowDelete(false)}

          />

        )

      }

    </>

  );

}