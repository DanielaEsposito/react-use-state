// IMPORT USE STATE FROM REACT
import { useState } from "react";
//IMPORT ARRAY
import languages from "./data/languages";
//IMPORT BUTTON COMPONENT
import Button from "./componensts/Button.jsx";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
  };
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
                <Button
                  //props del GENITORE
                  key={index}
                  language={language}
                  onSelect={handleSelectLanguage}
                />
              ))}
            </div>
            <div className="card-description">
              {selectedLanguage ? (
                <>
                  <h2>{selectedLanguage.title}</h2>
                  <p>{selectedLanguage.description}</p>
                </>
              ) : (
                <div>NESSUN LINGUAGGIO SELEZIONATO</div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
