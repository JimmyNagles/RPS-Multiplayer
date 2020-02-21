

trainName="";
destination="";
firstArrival=" ";
frequency="";

//materialized

$('.parallax').parallax();

$('.modal').modal();





const firebaseConfig = {
  apiKey: "AIzaSyCBSPCg5CxQPJ21vNi43iLySWz5A5Q7hsk",
  authDomain: "trainschedule-c8cb3.firebaseapp.com",
  databaseURL: "https://trainschedule-c8cb3.firebaseio.com",
  projectId: "trainschedule-c8cb3",
  storageBucket: "trainschedule-c8cb3.appspot.com",
  messagingSenderId: "24287390514",
  appId: "1:24287390514:web:9f36c018de05985699852b",
  measurementId: "G-100Y064EHX"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
   // Get a reference to the database service
   let database = firebase.database();

  console.log(database)
 



// Capture Button Click
$("#addT").on("click", function (event) {

alert("ive been clicked")
  // prevent form from trying to submit/refresh the page
  event.preventDefault();

  // Capture User Inputs and store them into variables
  const trainName = $("#train_name").val().trim();
  const destination = $("#destination").val().trim();
  const firstArrival = $("#first_arrival").val().trim();
  const frequency = $("#frequency").val().trim();


  // Console log each of the user inputs to confirm we are receiving them
  console.log(trainName);
  console.log(destination);
  console.log(firstArrival);
  console.log(frequency);

//clearns input
clearsinput();
//creates obj for train
let newTrain={
  trainName,
  destination,
  firstArrival,
  frequency

}

database.ref().push(newTrain);


console.log("just added to firebase")


});





function clearsinput() {

  $("#train_name").val("");
  $("#destination").val("");
  $("#first_arrival").val("");
  $("#frequency").val("");
  alert("empty inputs")

}






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