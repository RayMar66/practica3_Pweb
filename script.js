window.onload = function() {
  loadHistory();
};

function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operation = document.getElementById("operation").value;
  var result = 0;
  var expression = "";

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, introduce dos números válidos.");
    return;
  }

  if (operation === "add") {
    result = num1 + num2;
    expression = num1 + " + " + num2 + " = " + result;
  } else if (operation === "subtract") {
    result = num1 - num2;
    expression = num1 + " - " + num2 + " = " + result;
  } else if (operation === "multiply") {
    result = num1 * num2;
    expression = num1 + " × " + num2 + " = " + result;
  } else if (operation === "divide") {
    if (num2 === 0) {
      alert("No se puede dividir por cero.");
      return;
    }
    result = num1 / num2;
    expression = num1 + " ÷ " + num2 + " = " + result;
  }

  document.getElementById("result").innerText = "Resultado: " + result;
  addToHistory(expression);
}

function addToHistory(entry) {
  var history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(entry);
  localStorage.setItem("calcHistory", JSON.stringify(history));
  loadHistory();
}

function loadHistory() {
  var historyList = document.getElementById("historyList");
  historyList.innerHTML = "";
  var history = JSON.parse(localStorage.getItem("calcHistory")) || [];

  for (var i = 0; i < history.length; i++) {
    var li = document.createElement("li");
    li.textContent = history[i];
    historyList.appendChild(li);
  }
}

function clearHistory() {
  if (confirm("¿Estás seguro de que deseas borrar el historial?")) {
    localStorage.removeItem("calcHistory");
    loadHistory();
  }
}
