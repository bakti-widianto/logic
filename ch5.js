function stringManipulation(word) {
    const vokal = ['a' || 'i' || 'u' || 'e' || 'o']
    let hasil = ''
    // console.log(word[0])

    for (let i = 0; i < vokal.length; i++) {
        if(word[0]== vokal[i]){
            console.log(word)
        }else{
            hasil = word.slice(1) + word[0] + 'nyo'
            console.log(hasil)
        }
    }



}
stringManipulation('ayam')//'ayam'
stringManipulation('bebek')//'ebekbnyo'