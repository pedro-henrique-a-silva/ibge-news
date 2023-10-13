export type NewsType = {
    id: Number,
    tipo: String,
    titulo: String,
    introducao: String,
    data_publicacao: String,
    // produto_id: 9201,
    // produtos: "9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071",
    editorias: String,
    imagens: String,
    // produtos_relacionados: "9201",
    destaque: Boolean,
    link: String
}

export type NewsContextType = {
    news: NewsType[],
}