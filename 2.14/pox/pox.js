function pox(x, n){
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt('Enter a value for x:'. '');
let n = prompt('Enter a value for n:'. '');

if(n <= 1){
    alert('n must be greater than 1')
}
else{
    alert(pox(x. n));
}