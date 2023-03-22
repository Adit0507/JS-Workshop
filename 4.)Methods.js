// map()
const nums= [1, 2, 3, 4]

const multiplyThree = nums.map(i => i*3)

console.log(multiplyThree)


// filter()
const num2= [3,14,8,11,5]

const moreThanTen= num2.filter((i) => {
    return i > 10;
})

console.log(moreThanTen)


// reduce()
const nums3 = [1,2,3,4]

const sum = nums3.reduce((acc, curr, i, arr) => {
    return acc + curr
}, 0)

console.log(sum)

