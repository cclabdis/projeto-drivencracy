import { db } from "../database/database.config.js" 
import { MongoClient } from "mongodb"
import dayjs from "dayjs"

export async function createChoice(req, res) {

    const {title, pollId } = req.body

    try {
        const newId = new ObjectId(pollId)
        const poll = await db.collection("choices").findOne({ _id: newId })
        if (!poll) return res.sendStatus(404)

        const expiredDate = poll.expiredAt
        const isExpired = dayjs().isAfter(expiredDate, 'days')
            if(isExpired) return res.sendStatus(403)

        const searchChoice = await db.collection('choices').findOne({ title: title})
          
              if(searchChoice) {
                return res.sendStatus(409)
              }
          
        await db.collection('choices').insertOne(
            { title },
            { pollId: _id }
            )
        res.sendStatus(201)

      } catch (err) {
        res.status(500).send(err.message)
    }
}