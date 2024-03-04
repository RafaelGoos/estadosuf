import React, { useState, useEffect } from "react";
import { getStates } from "../services/api";
import "./StateCity.css";

function StateSelect({ onSelect }) {
  const [states, setStates] = useState([]);

  useEffect(() => {
    getStates().then((data) => setStates(data));
  }, []);

  const handleStateClick = (state) => {
    onSelect(state);
  };

  return (
    <div className="select-div">
      <label>Selecione um estado</label>
      <div className="select-list">
        {states.map((state) => (
          <button
            key={state.sigla}
            onClick={() => handleStateClick(state)}
            className={`state-select`}
          >
            {state.nome}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StateSelect;
