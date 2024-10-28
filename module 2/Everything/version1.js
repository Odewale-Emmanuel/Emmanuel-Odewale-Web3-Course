function every(array, condition) {
    for (let item of array) {
        if (!(condition(item))) {
            return false;
        }
    }

    return true;
}