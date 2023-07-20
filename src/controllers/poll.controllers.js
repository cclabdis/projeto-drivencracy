import { db } from "../database/database.config.js" 
import { MongoClient, ObjectId } from "mongodb"
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
        res.sendStatus(500)
}}

export async function searchIdPoll(req, res) {    
    const { id } = req.params
    
    try {
        const choices = await db.collection("choices").find( {pollId: id} ).toArray()
        if(choices.length === 0) return res.sendStatus(404)
      
        res.status(201).send(choices)
    } catch (err) {
        res.status(500).send(err.message)

}}


export async function resultPoll(req, res) {    
    const { id } = req.params
    
    try {
        const poll = await db.collection("polls").findOne({ _id: new ObjectId(id) })
        if (!poll) return res.sendStatus(404)
        
        const choice = await db.collection("choices").findOne({ pollId: id })
        if (!choice) return res.sendStatus(404)

        const votesCount = await db.collection("votes").countDocuments({ choiceId: choice._id });

        const resultPoll = {
            title: choice.title,
            votes: votesCount
        };
         
        res.status(200).send({
            title: poll.title,
            expireAt: poll.expireAt,
            result: resultPoll
        });

    } catch (err) {
        res.status(500).send(err.message);               
    }
}
