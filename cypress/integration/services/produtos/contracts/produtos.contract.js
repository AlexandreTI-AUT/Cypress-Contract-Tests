import Joi from 'joi'

const produtosSchema = Joi.object({
    quantidade: Joi.number(),
    produtos: Joi.array().items(
        Joi.object({
            _id: Joi.string(),
            preco: Joi.number(),
            descricao: Joi.string(),
            quantidade: Joi.number()
        })
    )

})

export default produtosSchema;