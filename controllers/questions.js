import { Question } from '../models/question.js'

function index(req, res) {
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
  req.body.owner = req.user.profile._id
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
  Question.findById(req.params.id)
  .then(question => {
    if (question.owner.equals(req.user.profile._id)) {
    res.render("questions/edit", {
      question,
      title: "Edit Question"
    })
    } else {
      console.log('failed to edit question')
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/questions')
  })
}

function update(req, res) {
  Question.findById(req.params.id)
  .then(question => {
    if (question.owner.equals(req.user.profile._id)) {
      question.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/questions`)
      })
    } else {
      console.log('failed to delete question')
      throw new Error ('🚫 Not authorized 🚫')
    }  
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/questions`)
  })
}

function deleteQuestion(req, res) {
  Question.findById(req.params.id)
  .then(question => {  
    if (question.owner.equals(req.user.profile._id)) {
      question.delete()
      .then(() => {
        res.redirect('/questions')
      }) 
    } else {
      console.log('failed to delete question')
      throw new Error ('🚫 Not authorized 🚫')
    }   
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