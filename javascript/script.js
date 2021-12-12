class Pesquisa {
    PaginaPrincipal(data) {
        let escolherData = new Usuario()
        escolherData.ReceberData(data)

        let visu = new Visualizar()
        visu.Visualiza(escolherData)
    }

    Selecao(data) {
        let escolherData = new Usuario()
        escolherData.ReceberData(data)

        let visu = new Visualizar()
        visu.Visualiza(escolherData)
    }
}

let pesquisa = new Pesquisa

function modificarData() {
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()

    return `${ano}/${mes + 1}/${dia}`
}

pesquisa.PaginaPrincipal(modificarData())

document.getElementById("submit").addEventListener("click", () => {
    let data = document.querySelector("#data")
    let dateString = data.value
    console.log(data.value)
    pesquisa.Selecao(dateString)
})