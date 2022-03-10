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

function play(req, res){
  Trivia.find({})
  .then(trivia => {
    trivia.forEach((el, idx) => {
      el.idx = idx
    })
    console.log(req.params.id)
    console.log(trivia.length)
    if(+req.params.id < trivia.length) {
      res.render('trivia/play', {
        trivia: trivia[req.params.id],
        title: "Play Trivia Intro", 
        user: req.user ? req.user : null,
      })
    }else {
      res.redirect('/trivia/home')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/trivia")
  })
}

export {
  index, 
  create,
  newTrivia as new, 
  play,
}