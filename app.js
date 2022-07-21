var student = {
    name: "",
    type: "student"
};
document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp);
}
function keyUp(event) {
    CalculateNumericOutput();
}

function calculateNumericOutput() {
    student.name =document.getElementById('name').value;
    var totalNameValue = 0;
    for (var i = 0; i < students.length; i++) {
        totalNameValue += student.name.charCodeAt(i)
    }
    //Insert result into Page
    var output ="Total Numeric value of person's is " + totalNameValue;
    document.getElementById('output').innerText = output;
}