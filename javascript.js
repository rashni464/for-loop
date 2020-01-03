function myfunction() {
    

var text1="hello";
var text2="how r u";
var text3= text1.concat(" ",text2);
document.getElementById("demo").innerHTML=text3;
}

function newtrim(){
    var  tex="     hello welcome";
    var tex1= (tex.trim());
    document.getElementById("demo1").innerHTML=tex1
}



var str = "Hello";

var text = " ";
var i;

for (i = 0; i < str.length; i++) {
  
  text += getSpace(i) + str.slice(i, (i+1)) + "<br/>"
 
}


function getSpace(i){
    var space = "\xa0"
    if(i===0){
    return ""
	}else if(i===1){
    return space
	}else if(i===2){
    return space+space
    }else if(i===3){
    return space+space+space
	}else if(i===4){
    return space+space+space+space
    }
}

document.getElementById("demo2").innerHTML = text;

