

  //    // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyA47mPlkyMpUqLQKSnhw99MbrQZUACC-8I",
  //  authDomain: "rockpapperscissors.firebaseapp.com",
  //   databaseURL: "https://rockpapperscissors.firebaseio.com",
  //   projectId: "rockpapperscissors",
  //   storageBucket: "rockpapperscissors.appspot.com",
  //   messagingSenderId: "56440700864",
  //   appId: "1:56440700864:web:c2f343c7e5e6bdca2dd225",
  //   measurementId: "G-R20JST999W"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  //  var database = firebase.database();


//  // Initial Variables (SET the first set IN FIREBASE FIRST)
    // Note remember to create these same variables in Firebase!
    var username = "";
     var email = "";
     var password = "";


$("#click-button").on("click", function() {
  // Prevent the page from refreshing
  // event.preventDefault();

  // Get inputs
  username = $("#username-input").val().trim();
  
  password = $("#password-input").val().trim();




  // // Change what is saved in firebase
  // database.ref().set({
  //   Username:username ,
  //   email: email,
  //   password: password
  // });
});
  
$(document).ready(function(){
  
    $('.modal').modal();
    $('.tabs').tabs();
    

  });



    // $("#boton").on("click", function(event) {
    //   // Prevent the page from refreshing
    //   event.preventDefault();

    //   // Get inputs
    //   var email= $("#email").val().trim();
    //   var name= $("#name").val().trim();
    //   phone = $("#phone-input").val().trim();

    //   // Change what is saved in firebase
    //   database.ref().set({
    //     name: name,
    //     age: age,
    //     phone: phone
    //   });
    // });








  // });
          

  // function singInWithEmailAndPassword(){

    

  //   var email= $("#email").val().trim();
  //   var name= $("name").val().trim();

  //   firebase.auth().singInWithEmailAndPassword(email.value, password.value);


  //   }
    


