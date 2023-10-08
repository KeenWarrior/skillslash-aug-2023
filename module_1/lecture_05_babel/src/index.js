const rootEle = document.getElementById("root");

const root = ReactDOM.createRoot(rootEle);

const date = new Date().toISOString();

function App() {
    return (
        <div>
            <h1>Hello World.</h1>
            <p>This is awesome. Time is {date}</p>
        </div>
    )
}

root.render(<App />);
