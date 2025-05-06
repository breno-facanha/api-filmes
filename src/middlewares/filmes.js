function validadeInsertFilmes(req, res, next){
    const { titulo, ano, genero, minutos, nota, sinopse, banner} = req.body 
    
    if(!titulo || !genero || !ano || !minutos || !nota || !sinopse || !banner){
        res.status(400).send({message:  "Inserir dados corretamente"})
    }


    if(titulo.length > 150){
        return res.status(400).send("Titulo deve ter no máximo 150 caracteres")
    }

    if(genero.length > 50){
        return res.status(400).send("Titulo deve ter no máximo 150 caracteres")
    }

    if(typeof ano !== 'number' || typeof minutos !== 'number'){
        return res.status(400).send("Ano e minutos devem ser numeros")
    }

    next()
}

module.exports = {
    validadeInsertFilmes
}