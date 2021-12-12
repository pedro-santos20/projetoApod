let pesquisar = new Pesquisa

function modificarData() {
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()

    return `${ano}-${mes + 1}-${dia}`
}

pesquisar.PaginaPrincipal(modificarData())

document.querySelector("#submit").addEventListener("click", () => {
    console.log("botao funciona")
    let data = document.querySelector("#data")
    let dateString = data.value
    console.log(data.value)
    pesquisar.Selecao(dateString)
})