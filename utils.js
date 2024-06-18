function generateRandomNumber(){
    return Math.floor(100000 + Math.random() * 900000);
}

function celciusToFahrenheit(celcius){
    return (celcius * 9) / 5 + 32
}


module.exports  = {generateRandomNumber, celciusToFahrenheit};