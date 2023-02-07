export function heightToMetric(heightFt, heightIn) {
    // it is necessary to parse because height is submitted as a string
    let heightFtFloat = parseFloat(heightFt);
    let heightInFloat = parseFloat(heightIn);
    let heightinInches = (heightFtFloat * 12) + heightInFloat;
    let heightInCentimeters = heightinInches * 2.54;
    return heightInCentimeters;
}

export function weightToMetric(weight) {
    // it is necessary to parse because height is submitted as a string
    let weightFloat = parseFloat(weight);
    let weightInkg = weightFloat * 0.45359237;
    return weightInkg;
}


export function femaleTDEE(weight, height, age, activityLevel) {
    // This is the mifflin St jeoor formula multiplied by activitylevel to get the Tdee
    // tdee is the total daily energy expenditure of a person
    let tdee = activityLevel * (10 * weight) + (6.25 * height) - (5 * age) - 161;
    return tdee;
}

export function maleTDEE(weight, height, age, activityLevel) {
    // mesurments are in metric so i have to convert
    let tdee = activityLevel * ((10 * weight) + (6.25 * height) - (5 * age) + 5);
    return tdee;
}



export function macros(tdee) {

    /* 
    1g of protein = 4 cals
    1g of carbs = 4 cals
    1g of fats = 9cals
    */

    let protein = null;
    let fats = null;
    let carbs = null;
}