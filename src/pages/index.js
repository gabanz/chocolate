import React from "react"
import { Helmet } from "react-helmet"
import "../styles/style.css"

function clickHandler(e) {
  e.target.classList.add('hinge');
}
[].forEach.call(document.getElementsByClassName('chocolate'), function(el) {
  el.addEventListener('click', clickHandler, false);
});


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Choconatsu</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <header></header>
      <main>
  <div class="wrap-my-candy">
  <div class="chocolate"></div>
  <div class="chocolate"></div>  
  <div class="chocolate"></div>
  <div class="chocolate"></div>
  <div class="chocolate"></div>  
  <div class="chocolate"></div>
  <div class="chocolate"></div>
  <div class="chocolate"></div>  
  <div class="chocolate"></div>
  <div class="chocolate"></div>
  <div class="chocolate"></div>  
  <div class="chocolate"></div>
  <div class="chocolate"></div>
  <div class="chocolate"></div>  
  <div class="chocolate"></div>
  <div class="chocolate"></div>
  <div class="chocolate"></div>  
  <div class="chocolate"></div> 
  </div>
      </main>
    </>
  )
}
