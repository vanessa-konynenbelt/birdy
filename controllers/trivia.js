import { Trivia } from '../models/trivia.js'

function index(req, res) {
  console.log("TRIVIA")
  Trivia.find({})
  .then(trivia => {
    res.render('trivia/index', {
      trivia,
      title: "trivia"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/trivia")
  })
}

function create(req, res) {
  const trivia = new Trivia(req.body)
  trivia.save(function(err){
    if(err) return res.redirect('/trivia/new')
  })
  res.redirect('/trivia')
}

function newTrivia(req, res) {
  console.log('adding new triv in the controller')
    res.render('trivia/new', {
      title: "add trivia"
    })
}

export {
  index, 
  create,
  newTrivia as new, 
}