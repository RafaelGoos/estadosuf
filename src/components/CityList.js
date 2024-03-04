import React, { useState, useEffect } from "react";
import { getCitiesByState } from "../services/api";
import "./StateCity.css";

function CityList({ state }) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (state) {
      getCitiesByState(state).then((data) => setCities(data));
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
        Cidade de {state}{" "}
        <span
          className={`search-icon ${showSearch ? "hidden" : ""}`}
          onClick={() => setShowSearch(!showSearch)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </span>
        {showSearch && (
          <input
            type="text"
            placeholder="Buscar cidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
      </label>

      <div className="select-list">
        {filteredCities.map((city) => (
          <button
            key={city.id}
            onClick={() => handleCityClick(city)}
            className={`city-select ${
              selectedCity === city ? "selected" : ""
            }`}
          >
            {city.nome}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CityList;
