// function sum() {
//     var x = 0
//     for (let i = 0; i < arguments.length; i++) {
//         x = x + arguments[i]

//     }
//     console.log(x)
// }

// sum(1, 2, 7)
// sum(1, 4)
// sum(11)
// sum(10, 3, 6, 7, 9)

// function oddNumber(n) {
//     let arr = []

//     for (let i = 0; i < n; i++) {
//         if (i % 2 == 0) {
//             arr.push(`${i} = ${false}`)
//         } else {
//             arr.push(`${i} = ${true}`)
//         }
//     }
//     console.log(arr)
// }
// oddNumber(10)


// function number(num){
//     let sorted = num.sort(function (a,b) {return a-b} )
//     let largest = sorted[sorted.length - 1]
//     let smallest = sorted[0]

//     console.log(sorted)
//     console.log(`largest = ${largest}`)
//     console.log(`smallest = ${smallest}`)
// }
// number([9,4,6,3,2,10,1,8])

function number(n) {
    let sorted = n.sort(function (a, b) { return a - b })
    let largest = sorted[sorted.length - 1]
    // console.log(largest)
    // console.log(sorted)

    for (let i = 0; i <= largest; i++) {

        if (sorted[i] == undefined) {
            console.log(i)
        }

    }
}
number([0, 1, 3, 2, 4, 5, 7, 9, 8])