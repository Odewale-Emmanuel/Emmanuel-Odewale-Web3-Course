function every(array, condition) {
    return !(array.some((item) => !(condition(item))));
}