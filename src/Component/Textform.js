import React, {useState}  from 'react'



export default function Textform(props) {
  
  const handleUpcase = () => {
     let newText = text.toUpperCase();
     setText (newText);
     props.showAlert("Converted to Uppercase .", "success");
  }

  const handleLocase = () => {
    let newText = text.toLowerCase();
    setText (newText);
    props.showAlert("Converted to Lowercase .", "success");
  }

  const handleClear = () => {
    let newText ="";
    setText (newText);
    props.showAlert("Successfully cleared.", "success");
  }

  const handleCopy = () => {
    // let newText =document.getElementById("box1");
    // newText.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied.", "success");
  }

  const handleExtraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Work Completed.", "success");
  }

  const handleOnchange = (event) =>{
    setText(event.target.value)
  }

  const [text,setText] = useState('Enter text here');

  // const countWordsAndCharacters = (text) => {
  //   // Check if the text is empty
  //   if (text.trim() === '') {
  //       return { words: 0, characters: 0 };
  //   }

  //   // Remove white spaces and tabs from the text
  //   const textWithoutSpaces = text.replace(/\s/g, '');

  //   // Split the text into words using regular expression
  //   const words = text.match(/\S+/g);

  //   // Count the number of characters excluding white spaces
  //   const characters = textWithoutSpaces.length;

  //   // Return an object with word count and character count
  //   return {
  //       words: words ? words.length : 0,
  //       characters: characters
  //   };
  // }

  return (
    <>
          <div className='container'>
            
                    <h1>Enter text here:</h1>
                    <div className="mb-3">
                        <textarea className={`form-control`} value={text} onChange={handleOnchange} style={{backgroundColor : (props.Mode === "dark")?"#595959":(props.Mode === "light")?"white":"#916e51",
                         color : (props.Mode === "dark")?"white":(props.Mode === "light")?"black":"white"}} id="box1" rows="8"></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: (props.Mode === "golden")?"green":"#085ed7"}} onClick={handleUpcase}><strong>Convert to Uppercase</strong></button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: (props.Mode === "golden")?"green":"#085ed7"}} onClick={handleLocase}><strong>Convert to Lowercase</strong></button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: (props.Mode === "golden")?"green":"#085ed7"}} onClick={handleClear}><strong>Clear Text</strong></button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"style={{backgroundColor: (props.Mode === "golden")?"green":"#085ed7"}}  onClick={handleCopy}><strong>Copy Text</strong></button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: (props.Mode === "golden")?"green":"#085ed7"}} onClick={handleExtraspace}><strong>Remove Extra Space</strong></button>

          </div>

          <div className="container my-3">
                    <h1>More Information</h1>
                    {/* <p>{countWordsAndCharacters(text).words} Words and {countWordsAndCharacters(text).characters} Characters </p> */}
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p> 
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Type something in the textbox to preview here ."}</p>
          </div>
 
            
           
                   
    </>
    
  )
}
