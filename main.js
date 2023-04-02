function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    
    if (weight && height) {
        var bmi = weight / ((height / 100) * (height / 100));
        document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(1);
    } else {
        document.getElementById("result").innerHTML = "Please enter your weight and height.";
    }
}

function myFunction() {
    window.open("https://www.thehealthsite.com/", "myWindow", "width=400,height=400");
  }

function openForm() {
    // Your JavaScript code for opening the form here
    alert("Opening health assessment form...");