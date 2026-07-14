import { deleteSnippet } from "../../services/codeService";

export default function DeleteConfirmation({

    snippet,

    refreshHistory,

    close,

}) {

    const handleDelete = async () => {

        try {

            await deleteSnippet(snippet.id);

            alert("Snippet Deleted Successfully!");

            refreshHistory();

            close();

        }

        catch (err) {

            console.error(err);

            alert("Failed to delete snippet.");

        }

    };

    return (

        <div className="modal">

            <div className="modal-card delete-card">

                <h2>
                    ⚠ Delete Snippet
                </h2>

                <p>
                    This action <strong>cannot be undone.</strong>
                    <br />
                    Are you sure you want to permanently delete this code snippet?
                </p>

                <div className="delete-snippet-name">
                    {snippet.title}
                </div>

                <div className="delete-buttons">

                    <button
                        className="cancel-btn"
                        onClick={close}
                    >
                        Cancel
                    </button>

                    <button
                        className="confirm-delete-btn"
                        onClick={handleDelete}
                    >
                        🗑 Delete Snippet
                    </button>

                </div>

            </div>

        </div>

    );

}