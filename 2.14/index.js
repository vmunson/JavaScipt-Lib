//Task 1
//No difference

//Task 2
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

//Task 3
function min(a, b){
    return (a < b) ? a : b;
}

