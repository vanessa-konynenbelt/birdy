import mongoose from 'mongoose'

const Schema = mongoose.Schema

const adviceSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  from: String, 
  years: Number,
  advice: String,
})

const Advice = mongoose.model('Advice', adviceSchema)

export {
  Advice
}