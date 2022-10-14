//inserimento valori

function insert(string) {
    document.getElementById('display').value += string;
}

//erase all
function cancAll() {
    document.getElementById('display').value = '';
}

//erase last

function cancLast() {
    let input = document.getElementById('display');
    input.value = input.value.substring (0, input.value.length - 1);
}

//result

function equal() {
    document.getElementById('display').value = eval(document.getElementById('display').value)
}

//root

function root (){
    let val = document.getElementById("display").value;  
    document.getElementById('display').value = Math.sqrt(val);
}

//exponentiation

function pow () {
    let x = parseInt(document.getElementById("display").value);
    let y = parseInt(document.getElementById("display").value);
    let result = Math.pow(x,y);
    document.getElementById('display').value = result;
}

//percentage

// function perc(total, percentage) {
//     var discountValue = (total / 100) * percentage;
//     var finalPrice = total - discountValue;
//     return finalPrice.toFixed(2);
// }



