import joi from "joi"

export const pollSchema = joi.object({
    title: joi.string().required(),
    expireAt: joi.date()
})

export const voteSchema =joi.object({
    title: joi.string().required(),
    pollId: joi.string().required()

})

 //* - O formato de uma enquete deve ser:
    
//     ```jsx
//     {
//     	_id: ObjectId("54759eb3c090d83494e2d222"),
//     	title: 'Qual a sua linguagem de programação favorita?', 
//     	expireAt: "2022-02-28 01:00"
//     }
//     ```
    
// - O formato de uma opção de voto deve ser:
    
//     ```jsx
//     { 
//     	_id: ObjectId("54759eb3c090d83494e2d999"),
//     	title: "Javascript", 
//     	pollId: ObjectId("54759eb3c090d83494e2d222") 
//     }
//     ```
    
// - O formato de um voto deve ser:

// { 
// 	_id: ObjectId("54759eb3c090d83494e2d000")
// 	createdAt: "2022-02-13 01:00", 
// 	choiceId: ObjectId("54759eb3c090d83494e2d999"), 
// } 