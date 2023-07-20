import joi from "joi"

export const voteSchema =joi.object({
    title: joi.string().required()
})