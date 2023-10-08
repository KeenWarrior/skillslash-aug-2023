const rootEle = document.getElementById("root");

const root = ReactDOM.createRoot(rootEle);
const h1 = React.createElement("h1", {}, "Hello World");

root.render(h1);
