console.log(myFunc())
console.log("hello World")
console.log("3:32")

// let var const
var myvariable = 1
console.log(myvariable = 2)
var thisIsLetter = "L"
var thisbool = false

//array
var thisArray = [12.76, "this is a string", "L"]
console.log(thisArray)
console.log(thisArray[1])

// operator
var firstNum = 150
var secondNum = 200
var result = firstNum + secondNum
console.log(result)
console.log(firstNum + secondNum)
console.log(firstNum - secondNum)
console.log(firstNum / secondNum)
console.log(firstNum * secondNum)

console.log(2 ** 3)             // exponent
console.log(5 % 2)              // modulo
console.log(Math.sqrt(4))       // square root
console.log(Math.floor(4.8))    
console.log(Math.ceil(4.8))     // round of

// function    - can by pass hierarchy and do not give undefine value
function myFunc() {
    return "I am a working function"
}
console.log(myFunc())

//concatanation
function myFunc1(func1) {
    return "Hi my name is " + func1
}
console.log(myFunc1("Mon"))

function myFunc2(func1, func2) {
    return func2 + func1
}
console.log(myFunc2("Mon", 9))

//conditional statement
console.log(1 > 5)
if(1 > 5) {
    console.log("This is true")
}
if(5 === 5) {
    console.log("This is true")
}
else if(1 === 5) {
    console.log("This is true")
}
else {
    console.log("This is else catcher")
}

// loop    initiator,parameter,alteration

for(var i = 1; i <= 100; i++) {
    if(i%2 != 0) {
        console.log(i)
    }
}

let ii = 0
while (ii<= 10) {
    console.log(ii)
    ii++
}
let iii = 0
while (iii<thisArray.length) {
    console.log(thisArray[iii])
    iii++
}
//  DOM

