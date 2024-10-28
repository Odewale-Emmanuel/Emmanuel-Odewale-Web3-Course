function flat(arrayOfArrays) {
    return arrayOfArrays.reduce((previous, current) => previous.concat(current), []);
}