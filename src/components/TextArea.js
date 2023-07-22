import React from 'react'
import {useState} from 'react'







export default function TextArea(props) {

    const[text,setText]=useState("");
    const clickonChange=(event)=>{
        console.log("onchange");
        setText(event.target.value)
    }
    const handleUpClick =()=>{
        console.log("text was clicke")
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert(" Changed to uppercase","success")

    }
    const handlelowerClick =()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert(" Changed to lowercase","success")


    }
    const handleClearClick=()=>{
        let newtext = ("");
        setText(newtext);
        props.showAlert(" Text cleared","success")

    }
    const handleCopyClick=()=>{
      var fetchText = document.getElementById("my-box");
      fetchText.select();
      navigator.clipboard.writeText(fetchText.value);
      document.getSelection().removeAllRanges();
      props.showAlert(" Text copied","success")



    }
    const handleExtraSpace=()=>{
      
      
      let newText = text.split(/[ ]+/);
      
      setText(newText.join(" "))
      props.showAlert(" Removed extra spaces","success")

    }

    const setbackgroundColor={
      backgroundColor: props.mode === 'dark' ? '#273e71' : 'white',
      color: props.mode === 'dark' ? 'white' : 'black'

    }

  return (
    <>

  
  
  
<div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
    <h2 className=''> Try TextUtils- Word counter, Character counter, Remove extras spaces</h2>
    <textarea placeholder='enter here text'  className="form-control mt-3" style={setbackgroundColor} showAlert={props.showAlert} id="my-box" rows="8" value={text} onChange={clickonChange}></textarea>
  </div>
  <button  type ="button" disabled={text.length===0} className=" my-2 btn btn-primary mx-2" onClick={handleUpClick}> convert to uppercase</button>  
  <button className='btn btn-primary 'disabled={text.length===0} onClick={handlelowerClick}> convert to lowercase</button>  
  <button  type ="button"disabled={text.length===0} className=" my-2 btn btn-primary mx-2" onClick={handleClearClick}>clear Text</button>  
  <button  type ="button"disabled={text.length===0} className=" my-2 btn btn-primary mx-2" onClick={handleCopyClick}>copy text</button> 
  <button  type ="button"disabled={text.length===0} className=" my-2 btn btn-primary mx-2" onClick={handleExtraSpace}>clear extra space</button> 





  


  <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
    <h2>Your text summary</h2>
    <p>{text.length} character and {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words</p>
    <p>{ 0.008*text.split(" ").filter((element)=>{return element.length!=0}).length}  minute read time</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"}</p>


  </div>

    </>
    
  )
}
