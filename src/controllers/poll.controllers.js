import { db } from "../database/database.config.js" 
import { MongoClient } from "mongodb"
import dayjs from "dayjs"
// dayjs().format("YYYY-MM-DD HH:MM")


export async function createPoll(req, res) {
    const { title, expireAt } = req.body
    // const timestamp = dayjs(filterDate, "DD-MM-YYYY").valueOf()

    try {
        const poll = { title, expireAt: expireAt ?? dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm')}
        await db.collection("polls").insertOne(poll)
        res.sendStatus(201)
 
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getPolls(req, res) {
    
    try {
        const polls = await db.collection("polls").find().toArray()

 
        res.status(201).send(polls)
    } catch (error) {
        console.error(error)
        res.status(500).send(err.message)
    }

}