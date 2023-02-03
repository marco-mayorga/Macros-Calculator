class BmrAndMacrosCalculator {
    constructor(gender, weight, height, age, activityLevel, calories, proteins, carbs, fats) {
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.age = age;
        this.activityLevel = activityLevel;
        this.calories = calories;
    }

    maleCalories(weight, height, age, activityLevel) {
        calories = activityLevel * ((10 * weight) + (6.25 * height) - (5 * age) - 161);
        return calories;
    }

    femaleCalories(weight, height, age, activityLevel) {
        calories = activityLevel * (10 * weight) + (6.25 * height) - (5 * age) + 5;
        return calories;
    }

    Macros(proteins, carbs, fats, calories) {
        
    }

}

