const BASE_URL = 'http://servicodados.ibge.gov.br/api/v3/noticias/';

export const fetchAPI = async (quantity = 20, page = 1) => {
  const response = await fetch(`${BASE_URL}?qtd=${quantity}&page=${page}`);
  const newsData = await response.json();

  return newsData;
};

export const fetchAPIFiltered = async (filter = 'noticia', quantity = 20, page = 1) => {
  const url = `${BASE_URL}?qtd=${quantity}&page=${page}&tipo=${filter}`;
  const response = await fetch(url);
  const newsData = await response.json();

  return newsData;
};
