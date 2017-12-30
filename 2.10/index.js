//Task 3
if ("0") {
    alert( 'Hello' );
  } // Will not return alert 

//Task 2
let name = prompt('What is the official name of JavaScript?', '');
if(name == 'ECMAScript'){
    alert('Right!');
}
else{
    alert("You don't know! ECMAScript?");
}

//Task 3
let num = prompt('Pick a number', '');
if(num >= 0){
    alert(1);
}
else if(num < 0){
    alert(-1);
}
else if(num == 0){
    alert(0);
}

//Task 4
let login =  prompt("Who's there?",  '');
if(login == 'Admin')(
    let password  =  prompt('Password', '');
    if(password == 'TheMaster'){
        alert("Welcome!");
    }
    else if(password ==  ''){
        alert("Canceled.");
    }
    else{
        alert("Wrong password");
    }
)
else if(login == ''){
    alert("Canceled");
}
else{
    alert("I don't know you");
}

//Task 5
let result;
result =  (a + b < 4) ?  "Below": "Over";

//Task 6
let message;
message  =  (login == 'Employee') ?  'Hello':
    (login == 'Director') ? 'Greetings':
    (longin  == '') ? 'No login': 
    "";