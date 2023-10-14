const BASE_URL = 'http://servicodados.ibge.gov.br/api/v3/noticias/';

export const BASE_URL_IMAGES = 'https://agenciadenoticias.ibge.gov.br/';

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

export const differenceInDays = (date: string) => {
  const partes = date.split(' ');
  const dataPartes = partes[0].split('/');
  const novaData = `${dataPartes[2]}/${dataPartes[1]}/${dataPartes[0]}`;
  const dataFornecida = novaData;

  const dataAlvo = new Date(dataFornecida);
  const dataAtual = new Date();
  const diferencaEmMilissegundos = Math.abs(dataAlvo.getTime() - dataAtual.getTime());
  const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  return diferencaEmDias;
};
