  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyCICYcK0uRJp0YHG8_sbkJTr2AWFvGMuw8",
    authDomain: "trainscheduler-8591e.firebaseapp.com",
    databaseURL: "https://trainscheduler-8591e.firebaseio.com",
    projectId: "trainscheduler-8591e",
    storageBucket: "trainscheduler-8591e.appspot.com",
    messagingSenderId: "758141375234",
    appId: "1:758141375234:web:7717f1973cc275ca"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

//   =========================================================


var destination = "";
var color_line = "";
var arrival_day = "";
var arrival_time = "";
var departure_day = "";
var departure_time = "";
var arrival = "";
var departure = "";

// moment().format('MMMM Do YYYY, h:mm a');
// moment().format("dddd, MMMM Do YYYY);
// moment().format("ddd, hA");
// moment().calendar(referenceTime);

$('#add-train-button').on('click', function(event) {
    event.preventDefault();
    
    destination = $('#destination-input').val().trim();
    color_line = $('#color-line-input').val().trim();
    arrival_day = $('#arrival-day-input').val().trim();
    arrival_time = $('#arrival-time-input').val().trim();
    departure_day = $('#departure-day-input').val().trim();
    departure_time = $('#departure-time-input').val().trim();
    arrival =  moment().format("dddd, MMMM Do YYYY");
    departure = moment().format("dddd, MMMM Do YYYY");
        console.log(arrival);
        console.log(departure);
});