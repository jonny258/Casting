function findTheHighestNumber(array) {

    let highestNumber = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > highestNumber) {
            highestNumber = array[i];
        }
    }

    return highestNumber;
}