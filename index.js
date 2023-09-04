function one(number) {
    let num = document.getElementById("num");
    num.value += number;
}

function plus(operator) {
    let num = document.getElementById("num");
    num.value += operator;
}

function equal() {
    let num = document.getElementById("num");
    num.value = eval(num.value);
}

function clr() {
    let num = document.getElementById("num");
    num.value = "";
}

function calcmodal() {
    // $("#calcmodal").removeClass('hide')
    // $("#calcmodal").addClass('show')
    $("#calcmodal").toggle();
    $("#section").toggle();
}

function xclose() {
    $("#calcmodal").toggle("hide");
    $("#section").toggle("show");
}


/******************************CONVERTER**********************************/
function convmodal() {
    // $("#calcmodal").removeClass('hide')
    // $("#calcmodal").addClass('show')
    $("#convmodal").toggle();
    $("#section").toggle();
}

function xclose_conv() {
    $("#convmodal").toggle("hide");
    $("#section").toggle("show");
}

function converter(value) {
    let convername = ['METER', 'KILOMETER', 'CENTIMETER', 'MILE', 'INCH'];
    //           METER
    let meter = [
                 // 0     1       2        3           4
                 ["* 1", "/ 1000", "* 100", "* 0.000621", "* 39.370079"], // 0
                 ["* 1000", "* 1", "* 100000", "* 0.621371", "* 39,370.07874"], // 1
                 ["* 100", "* 100000", "* 1", "* 0.0000062137", "* 0.393701"], // 2
                 ["* 1609.34", "* 1.60934", "* 160934", "* 1", "* 63360"], // 3
                 ["* 0.0254", "* 0.0000254", "* 2.54", "* 0.0000157828", "* 1"] // 4
                ];

    let leftbutton = document.getElementsByClassName("btn active");
    // let rightbutton = document.getElementsByClassName("btn1 active");
    let leftvalue = leftbutton[0].getAttribute("value");
    // let rightvalue = rightbutton.val();
    let rightvalue = value;

    let getId_left = 0;
    let getId_right = 0;

    for (let i = 0; i < convername.length; i++){
        if (leftvalue == convername[i]){
            getId_left = i;
        }
        if (rightvalue == convername[i]){
            getId_right = i;
        }
    }
 
    let multiplier = meter[getId_left][getId_right];
    let getInput = document.getElementById("num1").value;
    let total = 0;
    let operation = multiplier.split(" ");
    console.log(operation);
    total = parseFloat(getInput) + operation[0] + parseFloat(operation[1]);

    document.getElementById("num2").value = eval(total);
}

let btnContainer = document.getElementById("listbutton1");
let btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("btn active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let btnContainer1 = document.getElementById("listbutton2");
let btns1 = btnContainer1.getElementsByClassName("btn1");

for (let i = 0; i < btns1.length; i++) {
    btns1[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("btn1 active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}