import mongoose from 'mongoose'

const Schema = mongoose.Schema

const triviaSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  about: String, 
  trivia: String,
  idx: Number,
})

const Trivia = mongoose.model('Trivia', triviaSchema)

export {
  Trivia
}