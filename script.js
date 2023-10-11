function numbers(){
    const num1 = parseInt(document.getElementById("firstnum").value)
    const num2 = parseInt(document.getElementById("secondnum").value)
    return num1,num2;
}


function add(){
    // numbers()
    const num1 = parseInt(document.getElementById("firstnum").value)
    const num2 = parseInt(document.getElementById("secondnum").value)
    const answerbyadd = num1 + num2
    document.getElementById("answer").innerHTML= num1 + "+" +  num2 + "=" + answerbyadd;
}

function sub(){
    // numbers()
    const num1 = parseInt(document.getElementById("firstnum").value)
    const num2 = parseInt(document.getElementById("secondnum").value)
    const answerbysub = num1 - num2
    document.getElementById("answer").innerHTML= num1 + "-" +  num2 + "=" + answerbysub;
}

function mul(){
    // numbers()
    const num1 = parseInt(document.getElementById("firstnum").value)
    const num2 = parseInt(document.getElementById("secondnum").value)
    const answerbymul = num1 * num2
    document.getElementById("answer").innerHTML= num1 + "x" +  num2 + "=" + answerbymul;
}

function divide(){
    // numbers()
    const num1 = parseInt(document.getElementById("firstnum").value)
    const num2 = parseInt(document.getElementById("secondnum").value)
    const answerbyadivide = num1 / num2
    document.getElementById("answer").innerHTML= num1 + "&divide;" +  num2 + "=" + answerbyadivide;
}

function power() {
    const num1 = parseInt(document.getElementById("firstnum").value)
    const num2 = parseInt(document.getElementById("secondnum").value)
    const answerbypower = Math.pow(num1,num2)
    document.getElementById("answer").innerHTML= num1 + "<sup>"+ num2 +"</sup>"+"="+ answerbypower
}

function root(){
    const num1 = parseInt(document.getElementById("firstnum").value)
    const num2 = parseInt(document.getElementById("secondnum").value)
    const answerbyroot = Math.pow(num1,1/num2)
    document.getElementById("answer").innerHTML= num2 + "<bold>&radic;</bold>" +  num1 + "=" + answerbyroot
}

