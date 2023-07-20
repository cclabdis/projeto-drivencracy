import { Router } from "express"
import { createPoll, getPolls, searchIdPoll } from "../controllers/poll.controllers.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { pollSchema } from "../schemas/poll.schema.js"

const pollRouter = Router()
// pollRouter.use(validateAuth)

pollRouter.post("/poll", validateSchema(pollSchema), createPoll)
pollRouter.get("/poll", getPolls)
// pollRouter.get("/poll/:id/result")
pollRouter.get("/poll/:id/choice", searchIdPoll)

export default pollRouter