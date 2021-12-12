class Pesquisa {
    PaginaPrincipal(data) {
        console.log("controler funciona")
        let escolherData = new Usuario()
        escolherData.ReceberData(data)

        let visu = new Visualizar()
        visu.Visualiza(escolherData)
    }

    Selecao(data) {
        console.log("controler funciona")
        let escolherData = new Usuario()
        escolherData.ReceberData(data)

        let visu = new Visualizar()
        visu.Visualiza(escolherData)
    }
}