import { useEffect, useState } from "react";
import { getSnippet } from "../../services/codeService";

export default function ViewSnippetModal({

    snippetId,

    close,

}) {

    const [snippet, setSnippet] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadSnippet();

    }, []);

    const loadSnippet = async () => {

        try {

            const response = await getSnippet(snippetId);

            setSnippet(response.data);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="modal">

                <div className="modal-card">

                    <h2>Loading...</h2>

                </div>

            </div>

        );

    }

    return (

        <div className="modal">

            <div className="modal-card">

                <div className="modal-header">

                    <h2>{snippet.title}</h2>

                    <button onClick={close}>✕</button>

                </div>

                <div className="snippet-meta">

                    <p>

                        <strong>Source:</strong> {snippet.language}

                    </p>

                    <p>

                        <strong>Target:</strong> {snippet.target_language}

                    </p>

                </div>

                <textarea

                    readOnly

                    value={snippet.code}

                    rows={20}

                />

                <div className="modal-footer">

                    <button

                        onClick={() => {

                            navigator.clipboard.writeText(snippet.code);

                            alert("Copied!");

                        }}

                    >

                        Copy Code

                    </button>

                </div>

            </div>

        </div>

    );

}