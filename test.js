//no 3
function number(num){
    let sorted = num.sort(function (a,b) {return a-b} )
    let largest = sorted[sorted.length - 1]
    let smallest = sorted[0]

    console.log(sorted)
    console.log(`largest = ${largest}`)
    console.log(`smallest = ${smallest}`)
}
number([9,4,6,3,2,10,1,8])

//no 2
function palindrome(str) {

    if (typeof str == 'string') {
        console.log('masuk')
        let string = ''
        let clean = str.toLowerCase()
        for (let i = clean.length; i >= 0; i--) {
            if (clean[i]) {
                string += clean[i]
            }
        }
        if (string == str.toLowerCase()) {
            console.log(true)
        } else {
            console.log(false)
        }
    } else {
        for (let i = 0; i < str.length; i++) {
            let string = ''
            let clean = str[i].toLowerCase()
            for (let i = clean.length; i >= 0; i--) {
                if (clean[i]) {
                    string += clean[i]
                }
            }
            if (string == str[i].toLowerCase()) {
                console.log(true)
            } else {
                console.log(false)
            }
        }

    }


}
palindrome('Aya')
palindrome(["ada", "aya", "bakti"]);


//no 1
function oddNumber(n) {
    let arr = []

    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            arr.push(`${i} = ${false}`)
        } else {
            arr.push(`${i} = ${true}`)
        }
    }
    console.log(arr)
}
oddNumber(10)




//no 5
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