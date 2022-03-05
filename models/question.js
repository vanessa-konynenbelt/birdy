import mongoose from 'mongoose'

const Schema = mongoose.Schema

const questionSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  question: String, 
})

const Question = mongoose.model('Question', questionSchema)

export {
  Question
}