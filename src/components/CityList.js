import React, { useState, useEffect } from "react";
import { getCitiesByState } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./StateCity.css";

function CityList({ state }) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (state) {
      getCitiesByState(state.sigla).then((data) => setCities(data));
    }
  }, [state]);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const filteredCities = cities.filter((city) =>
    city.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="select-div">
      <label className="label-container">
        <span className="city-label">Cidades de {state.nome}</span>
        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i>
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </div>
      </label>

      <div className="select-list">
        {filteredCities.length === 0 ? (
          <p className="not-found">Cidade não encontrada</p>
        ) : (
          filteredCities.map((city, index) => (
            <button
              key={index}
              onClick={() => handleCityClick(city)}
              className={`city-select ${
                selectedCity === city ? "selected" : ""
              } ${searchTerm.length >= 2 ? "full-width" : ""}`}
            >
              {city.nome}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default CityList;
