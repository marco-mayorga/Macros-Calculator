import { heightToMetric, weightToMetric, maleTDEE, femaleTDEE, macros } from "./functions.js"

// Getting all the divs
const male = document.getElementById('gender_Male');
const female = document.getElementById('gender_Female');
const weight = document.getElementById('weight');
const heightFt = document.getElementById('height-ft');
const heightIn = document.getElementById('height-in');
const age = document.getElementById('age');
const activityLevel = document.getElementById('activity-level');
const goal = document.getElementById('goal');
const calculateBtn = document.getElementById('calculate-btn');

// convert everything to metric
let heightInCentimeters = heightToMetric(heightFt.value, heightIn.value);
let weightInKg = weightToMetric(weight.value);

// Turns strings to float
let ageFloat = parseFloat(age.value);
let activityLevelFloat = parseFloat(activityLevel.value);


calculateBtn.addEventListener("click", () => {
    // Checks if male or female is chosen
    if (male.checked) {

        let maleCals = maleTDEE(weightInKg, heightInCentimeters, ageFloat, activityLevelFloat);
        alert(maleCals)

        if (goal.value === "Lose Weight") {
            // The .20 is a 20% calorie deficit
            let caloriesToSubtract = maleCals * .20;

            let maleWeightLossTdee = maleCals - caloriesToSubtract;

            macros(maleWeightLossTdee)


        } else if (goal.value === "Maintain Weight") {

            macros(maleCals);

        } else if (goal.value === "Gain Weight") {
            // The .20 is a 20% calorie surplus
            let caloriesToAdd = maleCals * .20;

            let maleWeightLossTdee = maleCals + caloriesToAdd;

            macros(maleWeightLossTdee)

        }






    } else if (female.checked) {

        let femaleCals = femaleTDEE(weightInKg, heightInCentimeters, ageFloat, activityLevelFloat);

        if (goal.value === "Lose Weight") {
            // The .20 is a 20% calorie deficit
            let caloriesToSubtract = femaleCals * .20;

            let femaleWeightLossTdee = femaleCals - caloriesToSubtract;

            macros(femaleWeightLossTdee)


        } else if (goal.value === "Maintain Weight") {

            macros(femaleCals);

        } else if (goal.value === "Gain Weight") {

            // The .20 is a 20% calorie surplus

            let caloriesToAdd = femaleCals * .20;

            let femaleWeightLossTdee = femaleCals + caloriesToAdd;

            macros(femaleWeightLossTdee)

        }







    }
})