import { Advice } from '../models/advice.js'

function index(req, res) {
  Advice.find({})
  .then(advice => {
    console.log(advice)
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
  req.body.owner = req.user.profile._id
  const advice = new Advice(req.body)
  advice.save(function(err){
    if(err) return res.redirect('/advice/new')
  })
  res.redirect('/advice')
}

function newAdvice(req, res) {
    res.render('advice/new', {
      title: "add advice"
    })
}

function edit(req, res) {
  Advice.findById(req.params.id)
  .then(advice => {
    if (advice.owner.equals(req.user.profile._id)) {
    res.render("advice/edit", {
      advice,
      title: "Edit Advice"
    })
    } else {
      console.log('failed to edit advice')
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/advice')
  })
  console.log('edited')
}

function update(req, res) {
  Advice.findById(req.params.id)
  .then(advice => {
    if (advice.owner.equals(req.user.profile._id)) {
      console.log('we are in the IF!!:)')
      advice.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/advice`)
      })
    }else{
      console.log('failed to update advice')
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/advice`)
  })
  console.log('updated?')
}

function deleteAdvice(req, res) {
  Advice.findById(req.params.id)
  .then(advice => {  
    if (advice.owner.equals(req.user.profile._id)) {
      advice.delete()
      .then(() => {
        res.redirect('/advice')
      })  
    }else{
      console.log('failed to delete advice')
      throw new Error ('🚫 Not authorized 🚫')
    }
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