
//connects to firebase
var firebaseConfig = {
  apiKey: "AIzaSyA47mPlkyMpUqLQKSnhw99MbrQZUACC-8I",
  authDomain: "rockpapperscissors.firebaseapp.com",
  databaseURL: "https://rockpapperscissors.firebaseio.com",
  projectId: "rockpapperscissors",
  storageBucket: "rockpapperscissors.appspot.com",
  messagingSenderId: "56440700864",
  appId: "1:56440700864:web:c2f343c7e5e6bdca2dd225",
  measurementId: "G-R20JST999W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//creates variables to use firebases database and auth
const database = firebase.database();
const auth = firebase.auth();

console.log(database)

var playerChoice= "";
//when rock btn is clicked
$("rock").on("click",function(){

console.log(this)

  
})
//when papper btn is clicked
$("papper").on("click",function(){
  console.log(this)
  
})
//when scissors btn is clicked
$("scissors").on("click",function(){
  console.log(this)

})




$(document).ready(function () {

  $('.modal').modal();
  $('.tabs').tabs();


});


// gets players sing in/up infor

//updates page with players personal info

//sets up chat
//sets up friends list
// on click event on button - rock - papper scissors

// lets player know if the other player is ready
//compares answer
//lets user know who won
// updates score
//players go again



