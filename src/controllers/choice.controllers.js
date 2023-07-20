import { ObjectId } from "mongodb";
import { db } from "../database/database.config.js" 
// import { MongoClient } from "mongodb"
import dayjs from "dayjs"

export async function createChoice(req, res) {
  const { title, pollId } = req.body 
       try {
          const searchPoll = await db.collection('polls').findOne({ _id:  new ObjectId(pollId) } )
            if(!searchPoll) return res.sendStatus(404)
      
          const expiredDate = searchPoll.expiredAt
      
          const isExpired = dayjs().isAfter(expiredDate, 'days')
             if(isExpired) return res.sendStatus(403)
        
          const searchChoice = await db.collection('choices').findOne({ title: title })    
            if(searchChoice) return res.sendStatus(409)
          
          await db.collection('choices').insertOne({
            title,
            pollId
          })
      
          res.sendStatus(201)

        } catch(err){
          res.status(500).send(err.message)
        }
      }

export async function voteChoice (req, res) {
  const id = req.params.id;
  const vote = { createdAt: dayjs().format('YYYY-MM-DD HH:mm'), choiceId: id } 
     
    try {
          const choice = await db.collection('choices').findOne({ _id: new ObjectId(id)} )      
          if(!choice) return res.status(404).send('Opção de voto não existente')
      
          const searchPoll = await db.collection('polls').findOne({ _id: new ObjectId(choice.pollId) });
      
          const expiredDate = searchPoll.expiredAt
      
          const isExpired = dayjs().isAfter(expiredDate, 'days')
          if(isExpired) return res.sendStatus(403)      

          await db.collection('votes').insertOne(vote)
      
          res.sendStatus(201)
        } catch(err) {
           res.status(500).send(err.message)
        }
      }