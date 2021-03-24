import "./App.css";

function App() {
  return (
    <div className="App">
      <footer className="footer">
        <small>
          <span>This project is coded by JulietaZon and is </span>
          <br />
          and is{" "}
          <span
            className="Link"
            onClick={() =>
              window.open(
                "https://github.com/julietazon/dictionary-react-app-project",
                "_blank"
              )
            }
          >
            Open Source
          </span>{" "}
          on{" "}
          <span
            className="Link"
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            GitHub
          </span>
          ❣️
        </small>
      </footer>
    </div>
  );
}

export default App;
