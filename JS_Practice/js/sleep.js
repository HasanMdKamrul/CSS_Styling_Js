
function sleepFunc(person, time){

    result = person + ' is sleeping from ' + time;

    console.log(result);

    return result;
}


result = sleepFunc(person="Kamrul", time="10AM");

document.getElementById('sleep').innerHTML = result;