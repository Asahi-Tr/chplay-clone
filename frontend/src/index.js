import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.onscroll = function () { myFunction() };

var navbar = document.querySelector(".nav-bar");
var container = document.querySelector(".container");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    container.classList.add('container--pdt');
  } else {
    navbar.classList.remove("sticky");
    container.classList.remove('container--pdt');
  }
}

window.resizeBy = '500px'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
