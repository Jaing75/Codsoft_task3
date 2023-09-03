var temp = 0;
var val = 0;
var sign = "_";
document.getElementById("newValue").innerHTML = val;

function tempValue(x){
    temp = (temp*10) + x;
    document.getElementById("tempValue").innerHTML = temp;
}

function sign1(x){
    if(x == "+"){
        if(sign == "+"){
            val = val + temp;
        }
        else if(sign == "-"){
            val = val - temp;
        }
        else if(sign == "x"){
            val = val * temp;
        }
        else if(sign == "/"){
            val = val / temp;
        }
        else if(sign == "_"){
            val = temp;
        }
        sign = x;
        temp = 0;
        document.getElementById("newValue").innerHTML = val;
        document.getElementById("tempValue").innerHTML = temp;
    }
    else if(x == "-"){
        if(sign == "+"){
            val = val + temp;
        }
        else if(sign == "-"){
            val = val - temp;
        }
        else if(sign == "x"){
            val = val * temp;
        }
        else if(sign == "/"){
            val = val / temp;
        }
        else if(sign == "_"){
            val = temp;
        }
        sign = x;
        temp = 0;
        document.getElementById("newValue").innerHTML = val;
        document.getElementById("tempValue").innerHTML = temp;
    }
    else if(x == "x"){
        if(sign == "+"){
            val = val + temp;
        }
        else if(sign == "-"){
            val = val - temp;
        }
        else if(sign == "x"){
            val = val * temp;
        }
        else if(sign == "/"){
            val = val / temp;
        }
        else if(sign == "_"){
            val = temp;
        }
        sign = x;
        temp = 0;
        document.getElementById("newValue").innerHTML = val;
        document.getElementById("tempValue").innerHTML = temp;
    }
    else if(x == "/"){
        if(sign == "+"){
            val = val + temp;
        }
        else if(sign == "-"){
            val = val - temp;
        }
        else if(sign == "x"){
            val = val * temp;
        }
        else if(sign == "/"){
            val = val / temp;
        }
        else if(sign == "_"){
            val = temp;
        }
        sign = x;
        temp = 0;
        document.getElementById("newValue").innerHTML = val;
        document.getElementById("tempValue").innerHTML = temp;
    }
}

function other(x){
    if(x == "C"){
        temp = ~~(temp/10);
        document.getElementById("tempValue").innerHTML = temp;
    }
    else if(x == "AC"){
        temp = 0;
        val = 0;
        sign = "_";
        document.getElementById("tempValue").innerHTML = temp;
        document.getElementById("newValue").innerHTML = val;
    }
}

function equal(){
    if(sign == "+"){
        val = val + temp;
    }
    else if(sign == "-"){
        val = val - temp;
    }
    else if(sign == "x"){
        val = val * temp;
    }
    else if(sign == "/"){
        val = val / temp;
    }
    else if(sign == "_"){
        val = temp;
    }
    temp = val;
    val = 0;
    document.getElementById("newValue").innerHTML = val;
    document.getElementById("tempValue").innerHTML = temp;
}