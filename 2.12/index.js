//Task 1
    //The last output is 0 because the loop stops at 0

//Task 2
let i = 0;
while (++i < 5) alert( i ); // 1. 2. 3. 4

let i = 0;
while (i++ < 5) alert( i ); // 1, 2, 3, 4, 5

//Task 3
for (let i = 0; i < 5; ++i) alert( i ); //0, 1, 2, 3, 4

for (let i = 0; i < 5; i++) alert( i ); //0, 1, 2, 3, 4

//Task 4
for(let i = 2; i <= 10); 1++){
    if(i % 2 == 0)continue;
    alert(i);
}

//Task 5
let i = 0;
while(i < 3){
    alert(`tthe numbber is ${i}`);
    i++;
}

//Task 6
let num;
do{
    num = prompt("Enter a number greater than 100", '');
}
while(num <= 100 && num)

//Task 7
let n = 20;
nextPrime:
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
  alert( i ); 
}

