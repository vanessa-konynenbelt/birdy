
//-----*  Event Listeners Here:  *-----//  
let button = document.getElementById("button");
let text = document.getElementById("text");


//-----*  Event Listeners Here:  *-----// 
button.addEventListener('click', display)


//-----* Functions Here:  *-----// 
function display() {
  text.innerHTML = 'This is the first trivia'
}

console.log('THIS WORKS')