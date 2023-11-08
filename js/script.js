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

      // Classify the BMI.
  var bmihasil = "";
  if (bmi < 18.5) {
    bmihasil = "Kurang Berat Badan. Cara terbaik untuk menaikkan berat badan dengan cara mengatur kalori makanan dan mengonsomsi makanan 4 sehat dan 5 sempurna serta iringi dengan olahraga";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmihasil = "Normal (ideal). Tetap pertahankan dengan mengatur pola makanan dan menjaga olahraga serta tidur yang cukup";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmihasil = "Kelebihan Berat Badan. Cara terbaik untuk mengurangi berat badan dengan cara mengatur kalori makan yang dikonsumsi dan berolahraga dengan teratur";
  } else {
    bmihasil = "Kegemukan (Obesitas). Cara terbaik untuk mengurangi berat badan dengan cara mengatur kalori makan yang dikonsumsi dan berolahraga dengan teratur";
  }

  // Display the BMI classification to the user.
  document.getElementById("bmihasil").innerHTML += " (" + bmihasil + ")";
  
}