import React, { useState } from 'react';


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log('uppercase')
        if (text.length > 0) {
            let newtext = text.toUpperCase()
            setText(newtext)
            props.showAlert("Coverted to UpperCase", "success")

        }
        else {
            props.showAlert('Write Some text to convert it to Uppercase', 'success')
        }
    }
    const handleOnChange = (event) => {
        // console.log('Onchange')
        setText(event.target.value)
    }
    const handleLowClick = () => {

        if (text.length > 0) {
            let newtext = text.toLowerCase()
            setText(newtext)
            props.showAlert("Coverted to LowerCase", "success")
        }
        else {
            props.showAlert('Write Some text to convert it to Lowercase', 'success')
        }
    }
    const cleartext = () => {
        if (text !== '') {
            stopreading()
            let newtext = ''
            setText(newtext)
        }

    }
    var utterance
    const speak = () => {
        if ('speechSynthesis' in window) {
            utterance = new SpeechSynthesisUtterance(text);

            utterance.voice = speechSynthesis.getVoices()[5];

            speechSynthesis.speak(utterance);
        } else {
            console.log('Speech synthesis is not supported.');
        }
    }
    function stopreading() {
        if (text === '')
            props.showAlert('No text to read. Please type some texts', 'success')
        if ('speechSynthesis' in window) {
            if (utterance && speechSynthesis.speaking) {
                speechSynthesis.cancel();
            }
        }
    }
    const handlecopy = () => {
        if (text.length < 0) {
            var text1 = document.getElementById('mybox')
            text1.select()
            navigator.clipboard.writeText(text1.value)
            props.showAlert("Copied to Clipboard", "success")

        }
        else {
            props.showAlert("Write some text to copy it to clipboard", "success")
        }

    }
    function downloadTextFile() {
        var textContent = document.getElementById('mybox').value

        var blob = new Blob([textContent], { type: "text/plain" });

        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);

        link.download = "text.txt";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(link.href);;
        props.showAlert("Download begins", "success")
    }

    const [text, setText] = useState('');
    return (
        <div className='container'>

            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : '#fff' }} id="mybox" rows="15"></textarea>
            </div>
            <button className='btn btn-primary m-3' onClick={handleUpClick}>Covert to UpperCase</button>
            <button className='btn btn-primary m-3' onClick={handleLowClick}> Covert to LowerCase</button>
            <button className='btn btn-primary m-3' onClick={cleartext}> Clear Text</button>
            <button className='btn btn-primary m-3' onClick={speak}> Start Reading</button>
            <button className='btn btn-primary m-3' onClick={stopreading}>Stop Reading</button>
            <button className='btn btn-primary m-3' onClick={handlecopy}>Copy</button>
            <button className='btn btn-primary m-3' onClick={downloadTextFile}>Download</button>

            <div className="container my-3">
                <h1>Your text Summary</h1>
                <p>{text.split(' ').filter((element) => { return element.length }).length} words and {text.length} characters</p>
                <p> {0.008 * (text.split(' ').filter((element) => { return element.length }).length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox to preview here'}</p>
            </div>
        </div>

    )
}
