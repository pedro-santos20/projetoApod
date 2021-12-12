class Visualizar {
    Visualiza(data) {
        let titulo = document.getElementsByClassName("tituloMain")
        titulo.textContent = data.PegarTitulo()

        let detalhes = document.getElementsByClassName("descricaoFoto")
        detalhes.textContent = data.PegarDetalhes()

        let imagem = document.getElementById("imagem")
        imagem.src = data.PegarImagem()

        let date = document.getElementsByClassName("data")
        date.textContent = data.PegarData()
    }
}