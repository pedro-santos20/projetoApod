class Usuario {
    constructor() {
        this.data = ""
        this.titulo = ""
        this.detalhes = ""
        this.imagem = ""
    }

    ReceberData(data) {
        let request = new XMLHttpRequest()

        request.addEventListener("load", () => {
            if (request.status == 200) {
                let dados = this.ProcessoResponse(request.responseText)
                this.Atualizar(dados)
            }
        })

        request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=on0i9oTa9JCp52kDLUCHjbuwNjtWvqgtwOvGlcQb&date=${data}`, false)

        request.send()
    }

    ProcessoResponse(respString) {
        let response = JSON.parse(respString)
        return response
    }

    Atualizar(dados) {
        this.data = dados.date
        this.titulo = dados.title
        this.detalhes = dados.explanation
        this.imagem = dados.url
    }

    PegarData() {
        return this.data
    }

    PegarTitulo() {
        return this.titulo
    }

    PegarDetalhes() {
        return this.detalhes
    }

    PegarImagem() {
        return this.imagem
    }

}