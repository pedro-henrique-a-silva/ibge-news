const BASE_URL = 'http://servicodados.ibge.gov.br/api/v3/noticias/';

export const fetchAPI = async (quantity = 200, page = 1) => {
  const response = await fetch(`${BASE_URL}?qtd=${quantity}&page=${page}`);
  const newsData = await response.json();
  return newsData;
};
