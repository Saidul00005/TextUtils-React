import React from 'react'

export default function About(props) {
//   const [BwStyle, setBwStyle] = useState({
//            color : "black" ,
//            backgroundColor : "white",
//            border: "solid 1px black"
//    })

  let BwStyle = {
     color : (props.Mode === "dark")?"white":(props.Mode === "light")?"black":"green",
     backgroundColor : (props.Mode === "dark")?"#33373e":(props.Mode === "light")?"white":"#fac848",
     border : "1px solid",
     borderColor : (props.Mode === "dark")?"white":(props.Mode === "light")?"black":"green"
  }

  return (
    <>
    <div className='container' style={BwStyle}>
          <h1>About Us</h1>
          <div className="accordion" id="accordionExample">
             <div className="accordion-item" style={BwStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={BwStyle}>
                    <strong>Analyze your text</strong>
                    </button>
                    </h2>
               <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <strong>TextUtils gives you a way to analyze your text quickly and efficiently.</strong> It can count words & characters in a text. 
                    It can also convert your text to Uppercase and lowercase. It can also remove extra space in your text.
                    </div>
               </div>
             </div>
             <div className="accordion-item" style={BwStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={BwStyle}>
                    <strong>Free to use</strong>
                    </button>
                    </h2>
               <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <strong>TextUtils is a free character counter tool that can calculate character and word count statistics for a given text.</strong>
                    This is a good way of writing text with specific number of words and charcters. 
                    </div>
               </div>
             </div>
             <div className="accordion-item" style={BwStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={BwStyle}>
                    <strong>Browser compatible</strong>
                    </button>
                    </h2>
               <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <strong>This word counter tool works in different browsers such as Chrome,Firefox,Safari,Opera etc.</strong> 
                    It is useful to count characters in facebook, blog, excel documents, pdf documents, essays etc.
                    </div>
               </div>
             </div>
          </div>
    </div>
   
    </>
  )
}
