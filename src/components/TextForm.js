import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    function handleUpperCase() {
        // console.log("Clicked");
        const newUppercaseText = text.toUpperCase();
        setText(newUppercaseText);
        props.showAlert("Converted to Uppercase", "success");
    }

    function handleLowerCase() {
        const newLowercaseText = text.toLowerCase();
        setText(newLowercaseText);
        props.showAlert("Converted to Lowercase", "success");
    }

    function handleClearText() {
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    function handleCopyText() {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    return (
        <div>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1 className='my-2'>{props.heading}</h1>
                <div className="mb-2">
                    <label htmlFor="my-box" className="form-label"></label>
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#3e688d" : "white",
                            color: props.mode === "dark" ? "white" : "black"
                        }}
                    >

                    </textarea>
                </div>
                <button disabled={!text.length} className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>Convert to Uppercase</button>
                <button disabled={!text.length} className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>Convert to Lowercase</button>
                <button disabled={!text.length} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
                <button disabled={!text.length} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((item) => item !== "").length} words and {text.length} charcters</p>
                <p>{0.008 * (text.split(' ').filter((item) => item !== "").length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{!text ? "Nothing to preview" : text}</p>
            </div>
        </div>
    )
}
