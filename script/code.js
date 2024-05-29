data = ['Abdurahmaan', 4, 6, 9, 11, 'Charif']

//1
data.push(22)

// 2
console.log(data)

//3
 let number = []
        data.forEach((value) => {
            if (!isNaN(value)) {
                number.push(value)
            }
        })
    console.log(number)

 // 4
console.log(data.find(value => value == 11))

//5 
console.log(data.findIndex( value => value == 11))

//6
console.log(number.reduce((c, n) => c + n))

//7
//Concat and Spread Operators
let number2 = [9, 7, 4, 3, 1]
let number3 = number.concat(number2)
console.log(number3)

//8
console.log(` ${number3.slice(1, 4)} `)