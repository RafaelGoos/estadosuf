const API_BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';

export async function getStates() {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    const uniqueStatesMap = new Map();
    data.forEach(district => {
      const state = district.municipio.microrregiao.mesorregiao.UF;
      uniqueStatesMap.set(state.sigla, state);
    });
    const sortedStates = Array.from(uniqueStatesMap.values()).sort((a, b) => a.nome.localeCompare(b.nome));
    return sortedStates;
  } catch (error) {
    console.error('Erro ao buscar os estados:', error);
    throw error;
  }
}

export async function getCitiesByState(state) {
  try {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos');
    const data = await response.json();
    
    const cities = data
      .filter(district => district.municipio.microrregiao.mesorregiao.UF.sigla === state)
      .map(district => district.municipio);

    const uniqueCities = Array.from(new Set(cities.map(city => city.nome)))
      .map(nome => cities.find(city => city.nome === nome));

    return uniqueCities;
  } catch (error) {
    console.error('Erro ao buscar as cidades:', error);
    throw error;
  }
}




