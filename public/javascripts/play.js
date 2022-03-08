import { trivia } from '../controllers/trivia.js'

//-----*  Event Listeners Here:  *-----//  
let button = document.getElementById("button");
let text = document.getElementById("text");


//-----*  Event Listeners Here:  *-----// 
button.addEventListener('click', display)


//-----* Functions Here:  *-----// 
function display() {
  text.innerHTML = 'This is the first trivia'
  trivia.forEach(el => {
    text.innerHTML = el.trivia
  })
  console.log(trivia)
}

console.log('THIS WORKS')