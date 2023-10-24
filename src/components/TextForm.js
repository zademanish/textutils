import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Uppercase text applied','success')
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Lowercase text applied','success')
    }
    const clearText = ()=>{
      setText('');
      props.showAlert('Clear Text','success')
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
        // console.log("handle on change")
    }
    const copyText = async () => {
      await navigator.clipboard.writeText(text);
      props.showAlert('copied Text','success')
    }
  
    const [text,setText] = useState('Enter Text Here');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743',color:props.greenMOd ==='green'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" style={{color:props.mode==='dark'?'white':'#042743', backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
        </div>
        <button className="btn btn-danger mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
        {/* <button className="btn btn-primary" onClick={copyText}>Copy Text</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summery</h1>
      <p>{text.split(' ').length} words and {text.length} character</p>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>
     )
}
