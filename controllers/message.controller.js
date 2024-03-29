import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
const sendMessage = async (req,res)=>{
     try {
      const {message} = req.body
      const{ id: receiverId }= req.params;
      const senderId = req.user._id
      //create a new message and save it to the database
      let conversation = await Conversation.findOne({
         participants:{$all:[senderId, receiverId]},
      })
      if(!conversation){
         conversation = await Conversation.create({
            participants:[senderId, receiverId],
         })
      }
      const newMessage = new Message({
        senderId,
        receiverId,
        message
      })
      if(message){
         conversation.messages.push(newMessage._id)
      }
      // await conversation.save()
      // await newMessage.save()
      // this will run in parallel
      await Promise.all([conversation.save(), newMessage()])
      res.status(201).json(newMessage);
     } catch (error) {
        console.log("Error in sendMessage controller", error.message )
        res.status(500).json({error:"Internal server error"});
     }
};

export  default sendMessage ;