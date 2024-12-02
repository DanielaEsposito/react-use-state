import { useState } from "react";
import languages from "./data/languages";
import Button from "./componensts/Button.jsx";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1 className="page-title">Learn Web development</h1>
        </div>
      </header>
      <main>
        <section className="content">
          <div className="container">
            <div className="btn-container">
              {languages.map((language, index) => (
                <Button key={index} title={language.title} />
              ))}
            </div>
            <div className="card-desctiption">
              <h3 className="language-title"></h3>
              <p className="language-desctiption"></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
