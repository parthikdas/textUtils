import React, { useState } from 'react';

export default function TextForm(props) {
    const substrCount = (search) => {
        let i=0, n=0
        while (true) {
            i = text.indexOf(search, i);
            if (i >= 0) {
                n++;
                i++;
            } else break;
        }
        return n;
    }
    const handleUpClick = () => {
        // console.log("Upper case" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lower case", "success")
    }
    const handleSeClick = () => {
        let newText = text.toLowerCase()
        newText = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(newText)
        props.showAlert("Converted to sentence case", "success")
    }
    const handleTiClick = () =>{
        let newText = text, i=0
        newText = newText.split(" ")
        for(i=0;i<newText.length;i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        newText = newText.join(" ")
        setText(newText)
        props.showAlert("Converted to title case", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard", "success")
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text cleared", "success")
    }
    const handleOnChange = (event) => { // we get event when we use onChange
        // console.log('on change')
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
                {/* if we did not used onChange here then further user couldnot provide input as value={text} is given*/}
            </div>
            <button className={`btn btn-${props.buttonColor} mx-2 my-2`} onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className={`btn btn-${props.buttonColor} mx-2 my-2`} onClick={handleLoClick}>Convert to lowercase</button>
            <button className={`btn btn-${props.buttonColor} mx-2 my-2`} onClick={handleSeClick}>Convert to Sentence case</button>
            <button className={`btn btn-${props.buttonColor} mx-2 my-2`} onClick={handleTiClick}>Convert to Title Case</button>
            <button className={`btn btn-${props.buttonColor} mx-2 my-2`} onClick={handleExtraSpaces}>Handle Extra Spaces</button>
            <button className={`btn btn-${props.buttonColor} mx-2 my-2`} onClick={handleCopy}>Copy text</button>
            <button className={`btn btn-${props.buttonColor} mx-2 my-2`} onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.length} characters(with spaces)</p>
            <p>{text.length - substrCount(" ")} characters(without spaces)</p>
            <p>{text.split(" ").length-1} words</p>
            <p>{substrCount(".")} sentences</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p> {/* 0.008 is googled number (1/125) */}
            <h3>Preview</h3>
            <p>{text.length>0? text:"Enter something in textarea above to preview it here"}</p>
        </div>
        </>
    )
}