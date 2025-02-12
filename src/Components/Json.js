import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Json(props) {
    const [text, setText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const textAreaRef = useRef(null);

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const formatJSON = () => {
        try {
            let obj = JSON.parse(text);
            setText(JSON.stringify(obj, null, 2));
        } catch (error) {
            alert("Invalid JSON input! Please enter a valid JSON object.");
        }
    };

    const clearText = () => {
        setText("");
        setSearchTerm("");
    };

    const findText = () => {
        if (!searchTerm.trim()) return;
        
        let textarea = textAreaRef.current;
        let lowerText = text.toLowerCase();
        let lowerSearchTerm = searchTerm.toLowerCase();
        let index = lowerText.indexOf(lowerSearchTerm);

        if (index !== -1) {
            textarea.focus();
            textarea.setSelectionRange(index, index + searchTerm.length);
        } else {
            alert("Text not found!");
        }
    };

    return (
        <div className="container-fluid my-4">
            <h2 className="text-center text-primary fw-bold mb-3">JSON Formatter</h2>

            <div className="row" style={{ height: "75vh" }}>
                {/* JSON Input/Output - Full Height */}
                <div className="col-md-9">
                    <textarea
                        ref={textAreaRef}
                        className="form-control h-100 border border-primary"
                        placeholder="Enter JSON here..."
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            resize: "none",
                            fontFamily: "monospace",
                            backgroundColor: "#f8f9fa",
                        }}
                    />
                </div>

                {/* Options Panel */}
                <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Find in JSON..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-primary w-100 mb-2" onClick={formatJSON}>
                        Convert to JSON
                    </button>
                    <button className="btn btn-danger w-100 mb-2" onClick={clearText}>
                        Clear Text
                    </button>
                    <button className="btn btn-success w-100 mb-2" onClick={findText}>
                        Find
                    </button>
                </div>
                <div className="text-center mt-2">
                <h6 className="text-muted">No. of Characters: {text.length}</h6>
            </div>
            </div>

            {/* Character Count */}
            
        </div>
    );
}

export default Json;
