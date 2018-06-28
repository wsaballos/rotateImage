function rotateImage(a) {
    const rotatedArr = [];
    const finalArr = [];
    for (let j = 0; j < a.length; j++) {
         for (let i = a.length - 1; i >= 0; i--) { 
            rotatedArr.push(a[i][j]);
        }
        finalArr.push(rotatedArr.splice(0, a.length))
    }
    return finalArr;
}