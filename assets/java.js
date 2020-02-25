trainName = "";
destination = "";
firstArrival = " ";
frequency = "";

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
  let newTrain = {
    trainName,
    destination,
    firstArrival,
    frequency

  }
  //sends info to firebase real time database
  database.ref().push(newTrain);



});




//pulls info from firebase realtime database

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("child_added", function (snapshot) {


  //variables for firebase 

  let snapName = snapshot.val().trainName;
  let snapDestination = snapshot.val().destination;
  let snapFrequency = snapshot.val().frequency;
  let snapFirstArrival = snapshot.val().firstArrival;

  //train time
  //get current time
  let currentTime = moment().format("HH:mmA");
  console.log("current time",currentTime)
  //
  //
  let tTime = moment(snapFirstArrival, "HH:mmA");
  console.log("train time",tTime)
  //
  //
  //converts frequency into moment minutes
  let everyxm = moment(snapFrequency, "mmA")
  console.log("every x minutes",everyxm)


  
 let maxmoment= moment.max(moment(),tTime);
 console.log("max moment",maxmoment)
  

 console.log(moment(tTime).fromNow(true))

 




  let minutesAway;
  let nextArrival;









  // Handle the errors
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});



//function to cleat inputs

function clearsinput() {

  $("#train_name").val("");
  $("#destination").val("");
  $("#first_arrival").val("");
  $("#frequency").val("");


}