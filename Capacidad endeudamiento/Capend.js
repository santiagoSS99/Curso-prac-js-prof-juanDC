function calculaCapEndeudamiento(){
    const income = document.getElementById("income");
    const expenses = document.getElementById("expenses");
    const maxmin = document.getElementById("maxmin");

    const incomeValue = income.value;
    const expensesValue = expenses.value;
    const maxminValue = maxmin.value;

   

    const debCap30min = debtCap30(incomeValue, expensesValue);

    const check = document.getElementById("check");
    check.innerText = "Tu capacidad de endeudamiento minima es: " + debCap30min;
}

// function debtCap30 (incomeValue, expensesValue){
//     const incNeto = incomeValue - expensesValue;
//             const thirty = (incNeto * 30)/100;
//             return thirty;
// }

function debtCap40 (incomeValue, expensesValue){
    const incNeto = incomeValue - expensesValue;
            const thirty = (incNeto * 30)/100;
            return thirty;
}