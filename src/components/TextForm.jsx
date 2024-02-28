import React, { useState } from 'react'
/**
 * React functional component for the TextForm.
 * 
 * @param {object} props - component properties
 * @param {string} props.heading - heading for the form
 * @param {string} props.mode - color mode (light or dark)
 * @param {function} props.showAlert - function to display alerts
 * 
 * @returns {JSX.Element} - the TextForm component
 */
function TextForm(props) {
    //console.log('TextForm render');
    const [text, setText] = useState('');

    /**
     * handleUpClick - converts the text to uppercase and sets it as the state
     */
    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE", "success");
    }

    /**
     * handleLcClick - converts the text to lowercase and sets it as the state
     */
    function handleLcClick() {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    /**
     * handleClearClick - sets the text to an empty string and displays an alert
     */
    function handleClearClick() {
        setText('');
        props.showAlert("Text Cleared", "success");
    }

    /**
     * handleSpeak - speaks the text using the speechSynthesis API
     */
    function handleSpeak() {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }

    /**
     * handleTextChange - updates the text state with the input value
     * 
     * @param {object} e - event object
     */
    function handleTextChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Enter text here' value={text} onChange={handleTextChange} id="myBox" rows="12"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary">Convert to UPPERCASE</button>
                <button onClick={handleLcClick} className="btn btn-primary mx-2">Convert to lowercase</button>
                <button onClick={handleClearClick} className="btn btn-primary">Clear text</button>
                <button onClick={handleSpeak} className="btn btn-primary mx-2">Speak text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes required to read this para</p>
                <h5>Text Preview</h5>
                <p>{text.length > 0 ? text : "Enter text in textBox to preview it here..."}</p>
            </div>
        </>
    );
}

export default TextForm;
