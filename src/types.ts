export type NewsType = {
  id: number,
  tipo: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  // produto_id: 9201,
  // produtos: "9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071",
  editorias: string,
  imagens: string,
  // produtos_relacionados: "9201",
  destaque: boolean,
  link: string
};

export type NewsContextType = {
  news: NewsType[],
  pagination: number,
  updatePagination: (isFilter: string) => void,
  updateNews: (newNews: NewsType[]) => void,
  moreNews: (newNews: NewsType[]) => void,
};
