import React, { useState }  from 'react'
import { Fragment }  from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(" ");
    const handleOnchange = (event) => {
        console.log("ONchange Clicked")
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleClearClick = () => {
        let newtext = ("");
        setText(newtext);
    }
    return (
        <Fragment>
        <div class="container">

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label h3" > Enter the Text Below to Analyze</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" onChange={handleOnchange} value={text} rows="6" ></textarea>
            </div>
            <button type="button" class="btn btn-dark mx-2" onClick={handleUpClick} >UpperCase</button>
            <button type="button" class="btn btn-dark mx-2" onClick={handleLoClick}>LowerCAse</button>
            <button type="button" class="btn btn-dark mx-2" onClick={handleClearClick}>Clear</button>
            {/*<button type="button" class="btn btn-primary mx-2">P</>
            <button type="button" class="btn btn-primary mx-2">Primary</button> */}
        </div>
        <hr></hr>
        <div class="container my-3" >
            <h2>Text Summary</h2>
            {text.split(" ").length} words and {text.length} characters <br></br>
            Time to Read text : {0.008 * text.split(" ").length } Minutes
            <h2>Preview</h2>
            {text}
        </div>
        </Fragment>
    )
}
