

function spiral(param1) {

    //membuat multidimensional Array

    let matrix = new Array();

    let count = 0;

    for (i = 0; i < param1; i++) {

        matrix[i] = new Array();

        for (j = 0; j < param1; j++) {

            matrix[i][j] = count;

            count++

        }

    }

    // console.log(matrix);

    //membuat pola spiral dari multidimensional Array

    let horizo = 0;

    let vertic = 0;

    let batas = 0;

    let batasAtas = param1;

    let batasBawah = 0;

    let result = [];

    

    while (batas < param1*param1) {

        for (; horizo < batasAtas; horizo++) {

            result.push(matrix[vertic][horizo]);

        }

        horizo--;

        vertic++;

        for (; vertic < batasAtas; vertic++) {

            result.push(matrix[vertic][horizo]);

        }

        vertic--;

        horizo--;

        for (; horizo >= batasBawah; horizo--) {

            result.push(matrix[vertic][horizo]);

        }

        horizo++;

        vertic--;

        for (; vertic > batasBawah; vertic--) {

            result.push(matrix[vertic][horizo]);

        }

        vertic++;

        horizo++;

        batas++

        batasAtas--;

        batasBawah++;

    }

   console.log(result);

}

spiral(5);//result [0,1,2,3,4,9,14,19,24,23,22,21,20,15,10,5,6,7,8,13,18,17,16,11,12]

spiral(6);//result [0,1,2,3,4,5,11,17,23,29,35,34,33,32,31,30,24,18,12,6,7,8,9,10,16,22,28,27,26,25,19,13,14,15,21,20]

spiral(7);

