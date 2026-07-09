import {

    deleteSnippet,

} from "../../services/codeService";

export default function DeleteConfirmation({

    snippet,

    refreshHistory,

    close,

}) {

    const handleDelete = async () => {

        try {

            await deleteSnippet(snippet.id);

            alert("Snippet Deleted");

            refreshHistory();

            close();

        }

        catch (err) {

            console.error(err);

            alert("Delete Failed");

        }

    };

    return (

        <div className="modal">

            <div className="modal-card delete-card">

                <h2>

                    Delete Snippet

                </h2>

                <p>

                    Are you sure you want to delete

                </p>

                <h3>

                    {snippet.title}

                </h3>

                <div className="delete-buttons">

                    <button

                        className="delete-btn"

                        onClick={handleDelete}

                    >

                        Delete

                    </button>

                    <button

                        className="cancel-btn"

                        onClick={close}

                    >

                        Cancel

                    </button>

                </div>

            </div>

        </div>

    );

}