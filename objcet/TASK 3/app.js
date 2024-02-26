"use strict";

let user = {
    name: "Nurana",
    age: 30,
    retirementAge: 65,
    setAge: function (newAge) {
        this.age = newAge;
    },
    getYearsBeforeRetirement: function () {
        let yearsLeft = this.retirementAge - this.age;
        return yearsLeft
    }
};

user.setAge(40);


console.log(user.getYearsBeforeRetirement());
