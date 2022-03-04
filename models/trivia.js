import mongoose from 'mongoose'

const Schema = mongoose.Schema

const triviaSchema = new Schema({
  name: String, 
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  about: String, 
  trivia: String,
})

const Trivia = mongoose.model('Trivia', triviaSchema)

export {
  Trivia
}