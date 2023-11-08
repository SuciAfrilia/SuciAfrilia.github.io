// const wrapperinput = document.getElementById("wrapperinput")
// const result = document.getElementById("result")

// wrapperinput.addEventListener('input', function(){
//     const inputValue = wrapperinput.ariaValueMax.trim()
//     if (inputValue == "") {
//         console.log("FALSE")
//     } else {
//         console.log("TRUE")
//     }
// })

// function validatewrapperinput(input) {
//     const intergerRegex = /^-?\d+$/;
//     return intergerRegex.test(input)
// }

function calculateBMI() {
    console.log("TEST")
    // Get the user's height and weight.
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
  
    // Convert height from cm to m
    var heightInMeter = height * 0.01
    
    // Calculate the BMI.
    var bmi = weight / (heightInMeter * heightInMeter);
  
    // Display the BMI to the user.
    document.getElementById("bmi-result").innerHTML = "Your BMI is: " + bmi.toFixed(2);

    document.getElementById("page-calculator").remove();
  
    // Display the BMI classification to the user.
    // document.getElementById("bmi-result").innerHTML += " (" + bmiClassification + ")";
  }