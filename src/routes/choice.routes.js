import { Router } from "express"
import { createChoice} from "../controllers/choice.controllers.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { voteSchema } from "../schemas/vote.schema.js"

const choiceRouter = Router()
// pollRouter.use(validateAuth)

choiceRouter.post("/choice", validateSchema(voteSchema), createChoice)
// choiceRouter.get("/poll", getPolls)


export default choiceRouter