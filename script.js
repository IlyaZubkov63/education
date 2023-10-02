// document.getElementById('button').onclick = function() {
//     let text = document.getElementById('text');
//     let button = document.getElementById('button');
//     if (text.classList.contains('hidden')) {
        
//         button.style.backgroundColor = "green";
//         text.classList.remove('hidden')

//     } else {
//       text.classList.add('hidden')
        
//         button.style.backgroundColor = "grey";
//     }
// };


// document.getElementById('button').onclick = function() {
//     let text = document.getElementById('text');
//     let button = document.getElementById('button');
//     if (text.style.display == "none") {
//         text.style.display = "block";
//         button.style.backgroundColor = "green";
        

//     } else {
//         text.style.display = "none"
//         button.style.backgroundColor = "grey";
//     }
// };



// Скрипт для красной кнопки "Закрыть"
// document.getElementById('button-left').onclick = function() {
// document.getElementById('text').style.display = "none";
// document.getElementById('button').style.backgroundColor = "grey";
// };





// let users = [];
// let buttonUsers = document.querySelector('#button-right');
// buttonUsers.addEventListener('click', function(){
//     let user = {
//         name: getRandomRUHash(6),
//         age: Math.floor(Math.random() * 101)
//     }
//     users.push(user);
//     console.log(users)
//     console.log(users.length)
//     console.log(users.filter(item => item.age < 50))
// })



// function getRandomRUHash(max) {
//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   var i, result = '';
//   for(i = 0; i < max; i++) {
//     result += String.fromCharCode(getRandomInt(1072, 1103));
//   }
//   return result.toUpperCase();
// }

// ReactDOM.render(<div></div>, document.getElementById("app"));


let users = [];
document.querySelector("#new_obj").addEventListener('click', function() {
  const user = {
    name:getRandomRUHash(6),
    age: Math.floor(Math.random() * 101)
  }

  users.push(user);
 document.querySelector("#all_users").innerHTML = "";
 users.forEach(function(item) {
    document.querySelector("#all_users").innerHTML += "<li>Имя: "+ item.name +"</li><li>Возраст: "+ item.age +"</li><hr>";
  }
 )
 document.querySelector("#length").innerHTML = users.length;
 document.querySelector("#filter").innerHTML = "";
 users.forEach(function(item) {
  if(item.age < 50) {
    document.querySelector("#filter").innerHTML += "<li>Имя: "+ item.name +"</li><li>Возраст: "+ item.age +"</li><hr>";
  }
 })
})





function getRandomRUHash(max) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var i, result = '';
  for(i = 0; i < max; i++) {
    result += String.fromCharCode(getRandomInt(1072, 1103));
  }
  return result.toUpperCase();
}




