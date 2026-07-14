import { useState } from "react";

import {

    updateSnippet,

} from "../../services/codeService";

export default function EditSnippetModal({

    snippet,

    refreshHistory,

    close,

}) {

    const [title, setTitle] = useState(snippet.title);

    const [language, setLanguage] = useState(snippet.language);

    const [targetLanguage, setTargetLanguage] = useState(snippet.target_language);

    const [originalCode,setOriginalCode]=useState(snippet.original_code);

    const [loading, setLoading] = useState(false);

    const handleUpdate = async () => {

        try {

            setLoading(true);

            await updateSnippet(snippet.id, {

                title,

                language,

                target_language: targetLanguage,

                original_code: originalCode,

            });

            alert("Snippet Updated Successfully");

            refreshHistory();

            close();

        }

        catch (err) {

            console.error(err);

            alert("Update Failed");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="modal">

            <div className="modal-card">

                <div className="modal-header">

                    <h2>Edit Snippet</h2>

                    <button onClick={close}>✕</button>

                </div>

                <input

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

                    rows={20}

                    value={originalCode}

                    onChange={(e) => setOriginalCode(e.target.value)}

                />

                <div className="modal-footer">

                    <button

                        onClick={handleUpdate}

                        disabled={loading}

                    >

                        {

                            loading

                                ? "Saving..."

                                : "Save Changes"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

}