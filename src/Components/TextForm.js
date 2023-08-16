import React ,{useState} from 'react'

export default function TextForm(props) {
  const handleUpclick =()=>{
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }
  const handleLoclick =()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase!","success");

  }
  const handleCopy =()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");

  }
  const removeExtra =()=>{
   let newText=text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert("Removed Extra Space!","success");

  }
  const handleOnChange =(event)=>{
    setText(event.target.value)
    
  }
  const resetInputField = () => {
    setText("")
    props.showAlert("Ready to enter text!","success");

  }
  const [text, setText] = useState('');
  return (
    <>
    <div>
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
  </div>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpclick} >ToUppercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoclick} >ToLowercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={removeExtra} >Remove Extra Space</button>

  
  <button disabled={text.length===0} type="button" class="btn btn-danger mx-1" onClick={resetInputField}>Reset</button>

    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>Your Text has <b>{text.split(" ").filter((element)=>{return element.length !== 0}).length}</b> Words and <b>{text.length}</b> Characters</p>
      <p><b>{0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} </b>Minutes Required To Read Complete TextArea</p>
      <h2>Preview Your Text</h2>
      <p>{text.length>0?text:"Enter Something To Preview"}</p>

    </div>
    </>
  )
}
