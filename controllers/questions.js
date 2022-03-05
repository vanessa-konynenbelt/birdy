import { Question } from '../models/question.js'

function index(req, res) {
  console.log("QUESTION")
  Question.find({})
  .then(question => {
    res.render('questions/index', {
      question,
      title: "question"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/questions")
  })
}

function create(req, res) {
  const question = new Question(req.body)
  question.save(function(err){
    if(err) return res.redirect('/questions/new')
  })
  res.redirect('/questions')
}

function newQuestion(req, res) {
  console.log('adding new question in the controller')
    res.render('questions/new', {
      title: "add question"
    })
}


function edit(req, res) {
  console.log('trying to edit')
  Question.findById(req.params.id)
  .then(question => {
    res.render("questions/edit", {
      question,
      title: "Edit Question"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/questions')
  })
  console.log('edited')
}

function update(req, res) {
  console.log('trying to update')
  Question.findById(req.params.id)
  .then(question => {
      question.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/questions`)
      })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/questions`)
  })
  console.log('updated?')
}

function deleteQuestion(req, res) {
  console.log('trying to delete this', req.params.id)
  Question.findById(req.params.id)
  .then(question => {  
      question.delete()
      .then(() => {
        res.redirect('/questions')
      })  
  })
  .catch(err => {
    console.log(err)
    res.redirect('/questions')
  })
}


export {
  index, 
  create,
  newQuestion as new, 
  edit, 
  update, 
  deleteQuestion as delete,
}