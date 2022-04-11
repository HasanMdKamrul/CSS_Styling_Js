//  ** Let and const are almost same but in const it cann't be reassiged and when declare must give a value. **

//  ** let redeclare not possible in the same scope

/*let x = 6;

let x = 7;*/

//  ** let reassign possible

let x = 5;

x = 7;

// document.getElementById('let').innerHTML = x;

// todo but in const reassign not possible and can't be redeclare

const z = 100;

const arrayProperty = [1 , 2 , 3 , 4 , 5 , 6]  // ** Inner property of a const array can be changed (Because the memory allocation by the arrayProperty in constant but not the element inside it)


arrayProperty[0] = 200;

arrayProperty.push(100)

// const z = 100; cann't redeclare as well

// z = 200; not possible

console.log(z);

// document.getElementById('const').innerHTML=arrayProperty;