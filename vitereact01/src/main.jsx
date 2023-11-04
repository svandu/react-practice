// import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App! |</h1>
//     </div>
//   );
// }

// const reactElement = { // this object could not run because the react has its own rule that it can expect what type of element in the object and these props are our own prop
//   type: 'a', //define the type of the element
//   props: {
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: "Click me to visit google"
// }

// const anotherReactElement = (
//   <a href="https://google.com" target="_blank">
//     Visit google
//   </a>
// );

// const anotherUser = "chai aur react"

// const reactElement = React.createElement( //babel inject this in react
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click me to google",
//   anotherUser //evaluated expression
// ); // create element is the own property of react where we can create element and it take tag, attributes, text in its parameter

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // MyApp()
  // anotherReactElement
  // reactElement
  // </React.StrictMode>,
);
