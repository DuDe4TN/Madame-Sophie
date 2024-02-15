import logo from "./logo.svg";
import "./App.css";
var state = { apiResponse: "" };

function callAPI() {
  fetch("http://localhost:9000/testAPI")
    .then((res) => res.text())
    .then((res) => (state = { apiResponse: res }));
}

function componentWillMount() {
  callAPI();
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>My first React App!</title>
        <link rel="shortcut icon" type="image/x-icon" href={logo} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReactJS
        </a>
      </header>
      <p className="APP-intro">{state.apiResponse}</p>
    </div>
  );
}

export default App;
