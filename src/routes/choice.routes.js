import { Router } from "express"
import { createChoice,  voteChoice} from "../controllers/choice.controllers.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { voteSchema } from "../schemas/vote.schema.js"

const choiceRouter = Router()
// pollRouter.use(validateAuth)

choiceRouter.post("/choice", validateSchema(voteSchema), createChoice)
choiceRouter.post("/choice/:id/vote", voteChoice)

export default choiceRouter