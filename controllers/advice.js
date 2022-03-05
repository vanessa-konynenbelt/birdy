import { Advice } from '../models/advice.js'

function index(req, res) {
  console.log("ADVICE")
  Advice.find({})
  .then(advice => {
    res.render('advice/index', {
      advice,
      title: "advice"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/advice")
  })
}

function create(req, res) {
  const advice = new Advice(req.body)
  advice.save(function(err){
    if(err) return res.redirect('/advice/new')
  })
  res.redirect('/advice')
}

function newAdvice(req, res) {
  console.log('adding new advice in the controller')
    res.render('advice/new', {
      title: "add advice"
    })
}

function edit(req, res) {
  console.log('trying to edit')
  Advice.findById(req.params.id)
  .then(advice => {
    res.render("advice/edit", {
      advice,
      title: "Edit Advice"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/advice')
  })
  console.log('edited')
}

function update(req, res) {
  console.log('trying to update')
  Advice.findById(req.params.id)
  .then(advice => {
      advice.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/advice`)
      })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/advice`)
  })
  console.log('updated?')
}

function deleteAdvice(req, res) {
  console.log('trying to delete this', req.params.id)
  Advice.findById(req.params.id)
  .then(advice => {  
      advice.delete()
      .then(() => {
        res.redirect('/advice')
      })  
  })
  .catch(err => {
    console.log(err)
    res.redirect('/advice')
  })
}

export {
  index, 
  create,
  newAdvice as new, 
  edit,
  deleteAdvice as delete,
  update
}