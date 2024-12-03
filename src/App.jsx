import { useState } from "react";
import languages from "./data/languages";
import Button from "./componensts/Button.jsx";

function App() {
  // lo stato che deve cambiare è il linguaggio
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  // funzione per cambiare il linguaggio al click
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
                  key={index}
                  language={language}
                  title={language.title}
                  onSelect={handleSelectLanguage}
                />
              ))}
            </div>
            <div>
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
