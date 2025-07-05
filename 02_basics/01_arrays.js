numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers)
// console.log(numbers[0])

// ----- Array Methods -----

// numbers.push(7)     // push at end
// numbers.pop()       // remove from end

// numbers.unshift(10) // add at start and shift next elements to right
// numbers.shift()     // remove from strat and shift to left

// console.log(numbers.includes(8))
// console.log(numbers.indexOf(6))

// myNum = numbers.join(" ")  // combines array elements with specified value
// console.log(numbers)
// console.log(myNum)
// console.log(typeof myNum)

// slice, splice

console.log("A ", numbers)

const myn1 = numbers.slice(1,4)  // makes a copy with range (start, end-1)
console.log(myn1)
console.log("B ", numbers)

const myn2 = numbers.splice(1,4)  // removes them from orignal array with range (start, end)
console.log(myn2)
console.log("C ", numbers)