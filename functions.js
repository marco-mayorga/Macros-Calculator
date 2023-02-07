export function heightToMetric(heightFt, heightIn) {
    // It is necessary to parse because height is submitted as a string
    let heightFtFloat = parseFloat(heightFt);
    let heightInFloat = parseFloat(heightIn);
    let heightinInches = (heightFtFloat * 12) + heightInFloat;
    let heightInCentimeters = heightinInches * 2.54;
    return heightInCentimeters;
}

export function weightToMetric(weight) {
    // It is necessary to parse because height is submitted as a string
    let weightFloat = parseFloat(weight);
    let weightInkg = weightFloat * 0.45359237;
    return weightInkg;
}


export function femaleTDEE(weight, height, age, activityLevel) {
    // This is the Mifflin-St Jeor Equation multiplied by activitylevel to get the Tdee
    // Tdee is the total daily energy expenditure of a person
    let tdee = activityLevel * ((10 * weight) + (6.25 * height) - (5 * age) - 161);
    return tdee;
}

export function maleTDEE(weight, height, age, activityLevel) {
    // This is the Mifflin-St Jeor Equation multiplied by activitylevel to get the Tdee
    // Tdee is the total daily energy expenditure of a person
    let tdee = activityLevel * ((10 * weight) + (6.25 * height) - (5 * age) + 5);
    return tdee;
}



export function macros(tdee, weight) {

    /* 
    1g of protein = 4 cals
        .825 of protein per pound is recommended
    1g of fats = 9cals
        25% of cals is reccommended
    1g of carbs = 4 cals
        the rest of the calories is aloccated to this
    */

    let weightInPounds = parseFloat(weight);

    // Cals and grams of protein
    let gramsOfProtein = weightInPounds * .825;
    let proteinCals = gramsOfProtein * 4;

    // Cals and grams of fat
    let fatCals = (tdee * .25);
    let gramsOfFats = fatCals / 9;

    // cals and grams of carbs
    let CarbCals = tdee - fatCals - proteinCals
    let gramsOfCarbs = CarbCals / 4;

    let macros = {
        tdee: tdee,
        protein: Math.round(gramsOfProtein),
        fats: Math.round(gramsOfFats),
        carbs: Math.round(gramsOfCarbs),
    }
    return macros;
}

export function macrosInfoFunc(macros) {
    const macrosInfo = document.createElement("div");
    macrosInfo.id = "macros-info";
    macrosInfo.innerHTML = JSON.stringify(macros);
    console.log(macros)

    const currentDiv = document.getElementById("form");
    document.body.insertBefore(macrosInfo, currentDiv)
}