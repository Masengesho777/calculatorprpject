let inputbox = document.getElementById('inputbox');

function display(num) {
    outputScreen.value += num
}
function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value)
    }
    catch (err) {
        alert("Invalid")
    }
}
function Clear() {
    inputbox.value = '';
}
function del() {
    inputbox.value = outputScreen.value.slice(0, -1)
}
percentage.addEventListener('click', function percent() {
    outputScreen.value = inputbox.value / 100;
})












