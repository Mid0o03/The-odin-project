function factorial(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0){
        return 'Please enter a positive integer';
    }
    // base case
    if(n === 0){
        return 1;
    }
    // recursive case
    return n * factorial(n-1); 
}