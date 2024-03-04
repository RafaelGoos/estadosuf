import React, { useState } from "react";
import StateSelect from "./components/StateSelect";
import CityList from "./components/CityList";
import "./App.css";

function App() {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateSelect = (state) => {
    setSelectedState(state);
  };

  const handleGoBack = () => {
    setSelectedState(null);
  };

  return (
    <div className="container">
      <div className="content">
        {selectedState && ( 
          <button onClick={handleGoBack} className="back-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              viewBox="0 -960 960 960"
              width="25"
              style={{ marginRight: "5px" }}
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
            Voltar
          </button>
        )}
        <img src="../logotipo.png" alt="Logo" className="logo" />
        {!selectedState ? (
          <StateSelect onSelect={handleStateSelect} />
        ) : (
          <>
            <CityList
              state={selectedState}
              stateFullName={selectedState.nome}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
