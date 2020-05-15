function sumZero(array) {
    let count = 0
    let num = array[count];
    let answer = []

    array.forEach((index) => {
        if (!num == index) {
            console.log("if " + index, num);
        } else if (index != !num) {

            console.log(`else: ` + index, num);
            count++;
        }
    })
    // return answer;
}


let arr = [-3, -2, -1, 0, 3, 4, 4, 5] // [-3, 3]

sumZero(arr);