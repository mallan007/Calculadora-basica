var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var AddBtn = document.getElementById("Add");
var SubBtn = document.getElementById("Sub");
var MultBtn = document.getElementById("Mult");
var DivBtn = document.getElementById("Div");
var printResult = document.getElementById("result");
// Função de Adição
function AddNum() {
    var n1 = parseFloat(num1.value);
    var n2 = parseFloat(num2.value);
    var result = n1 + n2;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNum);
// Função de Subtração
function SubNum() {
    var n1 = parseFloat(num1.value);
    var n2 = parseFloat(num2.value);
    var result = n1 - n2;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", SubNum);
//Função de Multiplicação
function MultNum() {
    var n1 = parseFloat(num1.value);
    var n2 = parseFloat(num2.value);
    var result = n1 * n2;
    printResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultNum);
// Função de Divisão
function DivNum() {
    var n1 = parseFloat(num1.value);
    var n2 = parseFloat(num2.value);
    var result = n1 / n2;
    printResult.textContent = result.toString();
}
DivBtn.addEventListener("click", DivNum);
