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

    <span>

        Source : {snippet.language}

    </span>

    <span>

        Target : {snippet.target_language}

    </span>

</div>

                <h3>

Original Code

</h3>

<textarea
readOnly
className="readonly-code"
rows={12}
value={snippet.original_code}
/>

<h3>Migrated Code</h3>

<textarea
readOnly
className="readonly-code"
rows={12}
value={
snippet.migrated_code
||
"Migration not completed."
}

/>

                <div className="modal-footer">

                    <button

                        onClick={() => {

                            navigator.clipboard.writeText(snippet.migrated_code);

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