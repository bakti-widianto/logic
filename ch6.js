

function stringManipulation(sentence) { //ubah menjadi array agar bisa diloop perkata

    let arr = sentence.split(' ');

    let vokal = ['a', 'i', 'u', 'e', 'o'];

    let hasil = '';

    //console.log(arr)

    for (i = 0; i <= vokal.length; i++) {

        let x = arr[i].charAt(0)

        //console.log(x);

        if (x == 'a' || x == 'i' || x == 'u' || x == 'e' || x == 'o') {

            hasil = hasil + arr[i] + ' '

        } else {

            hasil = hasil + arr[i].slice(1) + x + 'nyo '

        }

    }

    console.log(hasil)

}

stringManipulation('ibu pergi ke pasar bersama aku')

//result 'ibu erginyo eknyo ersamabnyo aku'

