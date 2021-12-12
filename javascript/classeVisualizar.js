class Visualizar {
    Visualiza(data) {
        let titulo = document.querySelector(".tituloMain")
        titulo.textContent = data.PegarTitulo()

        let detalhes = document.querySelector(".descricaoFoto")
        detalhes.textContent = data.PegarDetalhes()

        let imagem = document.querySelector("#imagem")
        imagem.src = data.PegarImagem()

        let date = document.querySelector(".data")
        date.textContent = data.PegarData()
    }
}