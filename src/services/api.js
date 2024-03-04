const API_BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades';

export async function getStates() {
  const response = await fetch(`${API_BASE_URL}/estados`);
  const data = await response.json();
  return data.sort((a, b) => a.nome.localeCompare(b.nome));
}

export async function getCitiesByState(state) {
  const response = await fetch(`${API_BASE_URL}/estados/${state}/municipios`);
  const data = await response.json();
  return data.sort((a, b) => a.nome.localeCompare(b.nome));
}
