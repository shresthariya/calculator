function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const displayElement = document.getElementById('display');
        const expression = displayElement.value;
        const result = eval(expression);
        displayElement.value = result;

     
        if (expression !== '') {
            addToHistory(expression + ' = ' + result);
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function backspace() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function addToHistory(entry) {
    const historyList = document.getElementById('historyList');
    const historyItem = document.createElement('li');
    historyItem.textContent = entry;
    historyList.appendChild(historyItem);
}

function clearHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
}
