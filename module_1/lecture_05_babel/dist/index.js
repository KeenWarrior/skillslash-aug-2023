"use strict";

var rootEle = document.getElementById("root");
var root = ReactDOM.createRoot(rootEle);
var date = new Date().toISOString();
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello World."), /*#__PURE__*/React.createElement("p", null, "This is awesome. Time is ", date));
}
root.render( /*#__PURE__*/React.createElement(App, null));