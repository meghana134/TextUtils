import React from 'react';
import { useState } from 'react';
import copy from "copy-to-clipboard";


export default function TextForm(props) {
    const [text,setText] = useState("Enter your text")
    // text = "tygth"; this is the wrong way to update the text in react
    // settext = is the coorect way to update

    const handleonChange=(event)=>{
        console.log('handle onchange')
        setText(event.target.value)
    }

    const handleonClick =()=>{
        console.log("upeercase was clicked" + text);
        //newText is a variable it stores the converted uppercase of
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted into Uppercase","success");
    }

    const handlelowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted into lowercase","success");
    }

    const handleclrClick= ()=>{
      let newText = "";
      setText(newText);
      props.showAlert("Text cleared","success");
    }

    const handleNumExtract=()=>{
      let r = /[0-9/ /]/g;
      let digits = text.match(r);
      let result= digits.join("");
      setText(result);
      props.showAlert("Number is Extracted","success");
    }

    const handlesymExtract=()=>{
      let regex = /[0-9/A-Z/a-z//]/g;
      let letters = text.match(regex)
      let res = letters.join();
      setText(res);
      props.showAlert("Symbols extracted","success");
    }

    //to copy text to clipboard
    const handleCopyText=()=>{
    let  c= copy(text);
     setText(c);
     //cpoies text but unselect the text
    //  document.getSelection().removeAllRanges();

    //  alert(`you have copied "${text}"`)
    props.showAlert("Text copied","success")
      
    }

    //to remove extra space 
    const handleExtra=()=>{
      let newtext = text.split(/[]+/);
      setText(newtext.join())
      props.showAlert("Extra space is removed","success")
    }
   
  return (
    <>
    <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
    {/* single line for loop style={{color: props.mode==="dark"?"white":"dark"}} */}
    <h2>{props.heading}</h2>
    
        
  <div className="mb-3">

    <textarea  className='form-control' id="exampleFormControlTextarea1" rows="9" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}}></textarea>
   
    </div>
    <button type="button"  disabled={text.length==0} className="btn btn-primary mx-2 my-1"  onClick={handleonClick}>Convert to uppercase</button>
    <button type="button" disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handlelowClick}>Convert to lowercase</button>
    <button type="button" disabled={text.length==0}  className="btn btn-primary mx-2 my-1" onClick={handleclrClick}>Clear the text</button>
    <button type="button" disabled={text.length==0}  className="btn btn-primary mx-2 my-1" onClick={handleNumExtract}>Extract numbers</button>
    <button type="button"  disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handlesymExtract}>Remove Symbol</button>
    <button type="button" disabled={text.length==0}  className="btn btn-primary mx-2 my-1" onClick={handleCopyText}>Copy text</button>
    <button type="button" disabled={text.length==0}  className="btn btn-primary mx-2 my-1" onClick={handleExtra}> Remove ExtraSpace</button>
    </div>
    
    <div className='container my-2' style={{color: props.mode==="dark"?"white":"black"}} >
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter((tex) => (tex!="")).length} Words and {text.length}charcaters</p>
        <p>Average time to read is {0.008 *text.split(" ").length } Minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"No text to preview"}</p>
        
    </div>
    </>
  )
}
