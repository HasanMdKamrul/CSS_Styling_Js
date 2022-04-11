

function celciousToFahrenheit(deg){

    let result;

    result = (deg * 9/5) + 32;


    return result;
}


document.getElementById('display').innerHTML = celciousToFahrenheit(7);