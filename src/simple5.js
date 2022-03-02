function _sum(a, b) {
    return a + b;
}

function _sumOf(arr) {
    let result = 0;
    arr.forEach(element => {
        result += element;
    });
    return result;
}

export { _sumOf as sumOf };
export { _sum as sum };