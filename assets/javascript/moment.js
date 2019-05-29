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

  var database = firebase.database();

//   =========================================================

// 
$('#add-train-button').on('click', function(event) {
    event.preventDefault();
    
    var destination = $('#destination-input').val().trim();
    var color_line = $('#color-line-input').val().trim();
    var arrival_day = moment($('#arrival-day-input').val().trim(), 'MM/DD/YYYY').format('X');
    var departure_day = moment($('#departure-day-input').val().trim(), 'MM/DD/YYYY').format('X');
        console.log(arrival_day);
        console.log(departure_day);

    var new_train = {
      destination: destination,
      color: color_line,
      arrival: arrival_day,
      departure: departure_day
    };

    database.ref().push(new_train);

    console.log(new_train.destination)
    console.log(new_train.color)
    console.log(new_train.arrival)
    console.log(new_train.departure)

    $('#destination-input').val('');
    $('#color-line-input').val('');
    $('#arrival-day-input').val('');
    $('#departure-day-input').val('');

});

database.ref().on('child_added', function(childSnapshot){
  console.log(childSnapshot.val());

  
}