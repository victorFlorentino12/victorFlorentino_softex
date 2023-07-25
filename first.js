
function sum(n,a,b){
    var txtn = document.querySelector('input#txtn')
    var txtn2 = document.querySelector('input#txtn1')
    var txtn3 = document.querySelector('input#txtn2')
    var n = Number(txtn.value)
    var a = Number(txtn1.value)
    var b = Number(txtn2.value)
    if(n = 1){
       var s = a + b 
       document.write(s,"<br/>" )
    }
    else if(n = 2){
        var sb = a - b
        document.write(sb,"<br/>" )
    }
    else if(n = 3){
        var m = a*b
        document.write(m,"<br/>" )
    }
    else if(n = 4){
        var d = a / b
        document.write(d,"<br/>" )
    }
    else{
        document.write(0,"<br/>" )
    }
}