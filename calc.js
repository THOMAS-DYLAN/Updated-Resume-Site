let num1 = "";
let num2 = "";
let change = "";
let total = "";
$("#textField").text("0");
$(".number").on("click", function(){
    if(change == ""){
        num1 += this.id;
        $("#textField").text(num1);
    }else{
        num2 += this.id;
        $("#textField").text(num2);
    }
});
$(".clear").on("click", function(){
    total = "";
    num1 = "";
    num2 = "";
    change = "";
    $("#textField").text("CLEARING");
    setTimeout(function(){
        $("#textField").text("0");
    }, 800);
})
$(".dot").on("click", function(){
    if(change == ""){
        num1 += this.id;
        $("#textField").text(num1);
        console.log(num1)
    }else{
        num2 += this.id;
        $("#textField").text(num2);
    }
})
$(".pos-neg").on("click", function(){
    if(change == ""){
        num1 *= -1;
        $("#textField").text(num1);
    }else{
        num2 *= -1;
        $("#textField").text(num2);
    }
})
$(".div100").on("click", function(){
    if(change == ""){
        num1 /= 100;
        $("#textField").text(num1);
    }else{
        num2 /= 100;
        $("#textField").text(num2);
    }
})
$(".change").on("click", function(){
    change += this.id;
})
$(".equals").on("click", function(){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(change == "+"){
        total = num1 + num2;
    }else if(change == "x"){
        total = num1 * num2;
        console.log(total);
    }else if(change == "/"){
        total = num1/num2;
    }else if(change == "-"){
        total = num1 - num2;
    }
    num1 = total;
    num2 = "";
    change = "";
    console.log(total)
    $("#textField").text(total);
})
