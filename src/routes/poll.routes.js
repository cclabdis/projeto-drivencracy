import { Router } from "express"
import { createPoll, getPolls } from "../controllers/poll.controllers.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { voteSchema } from "../schemas/vote.schema.js"

const pollRouter = Router()
// pollRouter.use(validateAuth)

pollRouter.post("/poll", validateSchema(voteSchema), createPoll)
pollRouter.get("/poll", getPolls)


export default pollRouter