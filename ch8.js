

function pola(str) {

    let number = str.split(' ');

    let number1 = number[0];

    let number2 = number[2];

    let number3 = number[4];

    //console.log(number,number1,number2,number3);

    for (i = 0; i < 10; i++) {

        for (j = 0; j < 10; j++) {

            //console.log(i,j);

            if(number1.replace('#',i) * number2 == number3.replace('#',j)){

                //console.log([i,j]);

                return [i,j];

            }

        }

    }

}

console.log(pola('42#3 * 188 = 80#204'));//result [8,5]

console.log(pola('8#61 * 895 = 78410#5'));//result [7,9]

