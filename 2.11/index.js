//Task 1 
alert( null || 2 || undefined ); //2

//Task 2
alert( alert(1) || 2 || alert(3) ); //1 then 2

//Task 3
alert( 1 && null && 2 ); //null

//Task 4
alert( alert(1) && alert(2) ); //2

//Task 5
alert( null || 2 && 3 || 4 ); //3

//Task 6
if(age >= 14 && age <= 90)

//Task 7
if(!(age >= 14 && age <= 90))
if(age < 14 || age >90)

//Task 8
if (-1 || 0) alert( 'first' ); //first
if (-1 && 0) alert( 'second' ); //doesn't run
if (null || -1 && 1) alert( 'third' ); //third
