const from = document.querySelector("#from");
const to = document.querySelector("#to");

function converter() {
    var input_value = document.getElementById("input_value").value;

    if (from.value == "celsius" && to.value == "fahrenheit") {
        result = (input_value * 1.8) + 32;
        document.getElementById("ans").innerHTML = result;
    }
    else if (from.value == "fahrenheit" && to.value == "celsius") {
        result = (input_value - 32)/1.8;
        document.getElementById("ans").innerHTML = result;  
    }
    else{
        document.getElementById("ans").innerHTML = input_value;
    }
}
function clearform() {
    onclick = document.getElementById("input_value").value = "";
    onclick = document.getElementById("ans").innerHTML= "";
}