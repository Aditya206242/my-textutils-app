import { useState } from "react";
import React from "react";

export default function Abouts(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let mystyle =  {
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'rgb(35, 97, 131)':'white',
  }
  
  

  return (
    <div className="container my-4 " style={mystyle}>
      <h1>About us</h1>
      <div
        class="accordion"
        id="accordionExample"
        className="  my-2"
        style={mystyle}
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={mystyle}
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong style={mystyle}>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={mystyle}
          >
            <div class="accordion-body">
              Textutils gives you way to analyze your text quickly and efficiently.Be it word count,character count.
              
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={mystyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            style={mystyle}
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
             Textutils is a free character counter tool that provide instantly character count 
             statics for a givin text. Textutils report the number of words and characters.Thus it 
             suitable for  writing  text with word/character limit.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={mystyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            style={mystyle}
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
             This Textutils software works in any web browser such as a Chrome, Firefox, Internet Explore,Opera.
             It suits to count characters in facebook, blog, books, excel document, pdf document, essay etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
