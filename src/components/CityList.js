import React, { useState, useEffect } from "react";
import { getCitiesByState } from "../services/api";
import "./StateCity.css";

function CityList({ state }) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
        <span className="city-label">Cidade de {state}</span>
        <input
          type="text"
          className="searchTerm open"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      <div className="select-list">
        {filteredCities.map((city) => (
          <button
            key={city.id}
            onClick={() => handleCityClick(city)}
            className={`city-select ${selectedCity === city ? "selected" : ""}`}
          >
            {city.nome}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CityList;
