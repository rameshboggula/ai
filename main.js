// Initialize Firebase (ADD YOUR OWN DATA)
  var config = {
    apiKey: "AIzaSyBK224pSLBuFWPgGkcg1w_nuDoAgBaeYxY",
    authDomain: "hyd-ai-86781.firebaseapp.com",
    databaseURL: "https://hyd-ai-86781.firebaseio.com",
    projectId: "hyd-ai-86781",
    storageBucket: "hyd-ai-86781.appspot.com",
    messagingSenderId: "198682998596"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
