function weirdMultiply(sentence) {

    //pisahin argument biar bisa di kali sama bilangan nya sendiri

    let number = sentence.toString();

    let hasil = 1;

    //console.log(number, typeof number)

    if (number.length == 1) { //base case(untuk menghentikan loop jika indexnya tinggal 1)

        return number[0]

    }

    for (i = 0; i < number.length; i++) {

        hasil = hasil * number[i]
        
        //console.log(hasil,number[i])

    }//bikin looping untuk mengalikan bilanganya sendiri

    return weirdMultiply(hasil);

}

console.log(weirdMultiply(39)); // 3*9=27 -> 2*7=14 -> 1*4=4 -> output 4

console.log(weirdMultiply(999));// 9*9*9=729 -> 7*2*9=126 -> 1*2*6=12 -> 1*2=2 -> output 2

console.log(weirdMultiply(3)); // output 3 karena telah satu digit

//pake recursive(function yang di dalamnya memanggil function itu sendiri)