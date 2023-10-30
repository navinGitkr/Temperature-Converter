function convertTemperature() {
    var convertTemperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var result;

       
    var div = document.getElementById('result');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    
    } else {
        div.style.display = 'none';
    }

    if (unit == "Celsius") {
        result = (convertTemperature * 9/5) + 32;
        document.getElementById("result").innerText = `${convertTemperature} celsius is equal to ${result} Fahrenheit.`;

    } else if (unit === "Fahrenheit") {
        result = (convertTemperature - 32) * 5/9;
        document.getElementById("result").innerText = `${convertTemperature} fahrenheit is equal to ${result} Celsius.`;
    }
    else {
        document.getElementById("result").innerText = "Invalid unit selected.";
    }

}


