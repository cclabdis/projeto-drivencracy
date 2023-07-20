import { db } from "../database/database.config.js" 
import { MongoClient } from "mongodb"
import dayjs from "dayjs"

export async function createPoll(req, res) {
    const { title, expireAt } = req.body
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
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
}}

export async function searchIdPoll(req, res) {    
    const id = req.params.id;
    
    try {
        const choices = await db.collection("poll").find( {pollId: id} ).toArray()
        if(choices.length === 0) return res.sendStatus(404)
      
        res.status(201).send(choices)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)

}}