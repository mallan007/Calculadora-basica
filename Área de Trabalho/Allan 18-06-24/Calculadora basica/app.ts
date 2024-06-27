const num1 = document.getElementById("num1") as HTMLInputElement
const num2 = document.getElementById("num2") as HTMLInputElement

const AddBtn = document.getElementById("Add") as HTMLButtonElement
const SubBtn = document.getElementById("Sub") as HTMLButtonElement
const MultBtn = document.getElementById("Mult") as HTMLButtonElement
const DivBtn = document.getElementById("Div") as HTMLButtonElement

const printResult = document.getElementById("result") as HTMLOutputElement
// Função de Adição
function AddNum(){
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let result = n1+n2;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNum)

// Função de Subtração
function SubNum(){
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let result = n1-n2;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", SubNum)

//Função de Multiplicação
function MultNum(){
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let result = n1*n2;
    printResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultNum)

// Função de Divisão
function DivNum(){
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let result = n1/n2;
    printResult.textContent = result.toString();
}
DivBtn.addEventListener("click", DivNum) 