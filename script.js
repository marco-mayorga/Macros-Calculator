import { heightToMetric, weightToMetric, maleTDEE, femaleTDEE, macros, macrosInfoFunc } from "./functions.js"

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




calculateBtn.addEventListener("click", () => {

    /*  Instantiate on button click */
    // convert everything to metric
    let heightInCentimeters = heightToMetric(heightFt.value, heightIn.value);
    let weightInKg = weightToMetric(weight.value);
    // Turns strings to float
    let ageFloat = parseFloat(age.value);
    let activityLevelFloat = parseFloat(activityLevel.value);


    // Checks if male or female is chosen
    if (male.checked) {

        let cals = Math.round(maleTDEE(weightInKg, heightInCentimeters, ageFloat, activityLevelFloat));
        alert(cals)

        if (goal.value === "Lose Weight") {
            // The .20 is a 20% calorie deficit
            let caloriesToSubtract = cals * .20;
            let weightLossTdee = cals - caloriesToSubtract;

            let macrosInGrams = macros(weightLossTdee, weight.value)
            // Creates divs with all the info available
            macrosInfoFunc(macrosInGrams);

        } else if (goal.value === "Maintain Weight") {

            let macrosInGrams = macros(cals, weight.value);

            // Creates divs with all the info available
            macrosInfoFunc(macrosInGrams);

        } else if (goal.value === "Gain Weight") {
            // The .20 is a 20% calorie surplus
            let caloriesToAdd = cals * .20;
            let weightgainTdee = cals + caloriesToAdd;

            let macrosInGrams = macros(weightgainTdee, weight.value)

            // Creates divs with all the info available
            macrosInfoFunc(macrosInGrams);
        }



    } else if (female.checked) {

        let cals = Math.round(femaleTDEE(weightInKg, heightInCentimeters, ageFloat, activityLevelFloat));
        alert(cals)

        if (goal.value === "Lose Weight") {
            // The .20 is a 20% calorie deficit
            let caloriesToSubtract = cals * .20;
            let weightLossTdee = cals - caloriesToSubtract;

            let macrosInGrams = macros(weightLossTdee, weight.value)
            // Creates divs with all the info available
            macrosInfoFunc(macrosInGrams);

        } else if (goal.value === "Maintain Weight") {

            let macrosInGrams = macros(cals, weight.value);

            // Creates divs with all the info available
            macrosInfoFunc(macrosInGrams);

        } else if (goal.value === "Gain Weight") {
            // The .20 is a 20% calorie surplus
            let caloriesToAdd = cals * .20;
            let weightgainTdee = cals + caloriesToAdd;

            let macrosInGrams = macros(weightgainTdee, weight.value)

            // Creates divs with all the info available
            macrosInfoFunc(macrosInGrams);
        }
    }
})