// Add an event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    // Reset the form fields
    document.getElementById("bmiForm").reset();
});

// Add the event listener for the form submit
document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let lifestyle = document.getElementById("lifestyle").value;
    let heightError = document.getElementById("heightError");
    let weightError = document.getElementById("weightError");
    let ageError = document.getElementById("ageError");
    let genderError = document.getElementById("genderError");
    let lifestyleError = document.getElementById("lifestyleError");
    let bmiMessage = document.getElementById("bmiMessage");
    let reportDiv = document.getElementById("reportSection");

    heightError.textContent = "";
    weightError.textContent = "";
    ageError.textContent = "";
    genderError.textContent = "";
    lifestyleError.textContent = "";
    bmiMessage.textContent = "";

    if (!height || height <= 0) {
        heightError.textContent = "Please enter a valid height.";
        isValid = false;
    }

    if (!weight || weight <= 0) {
        weightError.textContent = "Please enter a valid weight.";
        isValid = false;
    }

    if (!age || age <= 0) {
        ageError.textContent = "Please enter a valid age.";
        isValid = false;
    }

    if (!gender) {
        genderError.textContent = "Please select your gender.";
        isValid = false;
    }

    if (!lifestyle) {
        lifestyleError.textContent = "Please select your lifestyle.";
        isValid = false;
    }

    if (isValid) {
        let bmi = (weight / (height / 100) ** 2).toFixed(2);
        let healthStatus = getHealthStatus(bmi);
        bmiMessage.textContent = `Your BMI is ${bmi}, indicating that you are ${healthStatus}`;
        // Show the report section
        reportDiv.style.display = "block";
        // Fill the report textarea
        document.getElementById(
            "report"
        ).value = `Height: ${height} cm\nWeight: ${weight} kg\nAge: ${age}\nGender: ${gender.value}\nLifestyle: ${lifestyle}\nBMI: ${bmi}\nHealth Status: ${healthStatus}`;
    } else {
        // Hide the report section if form is not valid
        reportDiv.style.display = "none";
    }
});

function getHealthStatus(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}
