import Dictionary from "./Dictionary";
import Word from "./Word.js";
import Images from "./Images.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <h1>Dictionary</h1>
        </header>
        <main className="search">
          <Dictionary />
        </main>
        <main className="main"></main>
        <aside className="aside aside-1">
          <Word />
        </aside>
        <aside className="aside aside-2">
          <Images />
        </aside>
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
    </div>
  );
}

export default App;
