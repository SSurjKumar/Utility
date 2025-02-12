import React, { useState } from "react";
import "./Form.css"; // Import updated CSS file

function Form(props) {
    const [text, setText] = useState("");
    const [t, setT] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const upper = () => {
        setT(text.toUpperCase());
    };

    const lower = () => {
        setT(text.toLowerCase());
    };

    const clear = () => {
        setText("");
        setT("");
    };

    const copy = () => {
        let c = document.getElementById("box");
        if (c) {
            c.select();
            navigator.clipboard.writeText(c.value);
        }
    };

    return (
        <div className="container">
            <div className={`form-container ${props.mode}`}>
                <h2 className="text-center text-primary fw-bold">🔤 String Converter</h2>

                {/* Textareas */}
                <textarea
                    onChange={handleOnChange}
                    id="box"
                    className="form-control textarea-box"
                    placeholder="Enter text here..."
                    value={text}
                    rows="3"
                />
                <textarea
                    className="form-control textarea-box mt-2"
                    value={t}
                    rows="3"
                    readOnly
                />

                {/* Buttons */}
                <div className="button-group">
                    <button type="button" onClick={upper} className="btn btn-primary">
                        UPPERCASE
                    </button>
                    <button type="button" onClick={lower} className="btn btn-primary">
                        lowercase
                    </button>
                    <button type="button" onClick={clear} className="btn btn-danger">
                        Clear
                    </button>
                    <button type="button" onClick={copy} className="btn btn-success">
                        Copy
                    </button>
                </div>
                <div className="count-container">
                <h5>Character Count: <span className="text-info">{text.length}</span></h5>
            </div>
            </div>

            {/* Character Count */}
            
        </div>
    );
}

export default Form;
