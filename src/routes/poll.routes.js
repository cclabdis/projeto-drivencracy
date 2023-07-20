import { Router } from "express"
import { createPoll, getPolls, resultPoll, searchIdPoll } from "../controllers/poll.controllers.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { pollSchema } from "../schemas/poll.schema.js"

const pollRouter = Router()

pollRouter.post("/poll", validateSchema(pollSchema), createPoll)
pollRouter.get("/poll", getPolls)
pollRouter.get("/poll/:id/choice", searchIdPoll)
pollRouter.get("/poll/:id/result", resultPoll)

export default pollRouter