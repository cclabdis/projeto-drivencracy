import { db } from "../database/database.config.js" 
import { MongoClient } from "mongodb"
import dayjs from "dayjs"
// dayjs().format("YYYY-MM-DD HH:MM")


export async function createChoice (req, res) {

    const {tittle, pollId } = req.body

    try {
        const newId = ObjectId('poolId')
        const poll = await db.collection("polls").findOne({ _id: newId })
        if (!poll) return res.sendStatus(404)

        await db.collection("poll").updateOne(
            { tittle },
            { pollId: _id }
        )
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}