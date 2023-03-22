// OBJECTS
const user ={
    name: "Aditya Kumar Singh",
    age: 20,
    "Favorite Movie": "Babylon",
}

// console.log(user.age)
// console.log(user["Favorite Movie"])
// delete user.age;
// console.log(user.age)

// LOOPING THROUGH OBJECTS
// for(key in user){
//     console.log(user[key])
// }

// for(value in user){
//     console.log(user[value])
// }


// SPREAD & REST operator
function multiply(...nums){     // REST OPERATOR
    console.log(nums[0]*nums[1])
}

var arr = [3, 4]

multiply(...arr)    // SPREAD OPERATOR
