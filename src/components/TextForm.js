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
                <h1 className='my-5'>{props.heading}</h1>
                <div className="mb-4">
                    <label htmlFor="my-box" className="form-label"></label>
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={{
                            backgroundColor: props.mode === "dark" ? "grey" : "white",
                            color: props.mode === "dark" ? "white" : "black"
                        }}
                    >

                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length - 1} words and {text.length} charcters</p>
                <p>{0.008 * (text.split(' ').length - 1)} Minutes read</p>
                <h2>Preview</h2>
                <p>{!text ? "Enter something in the textbox above to preview here" : text}</p>
            </div>
        </div>
    )
}
