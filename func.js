let user;

user = String;

document.getElementById("btn").onclick = function(){

    
    user = document.getElementById("name").value;


if(user == "tausif" || user == "Tausif"){
   document.getElementById("my").innerHTML = "brother";
}

else if(user == "Semanto"){
    document.getElementById("my").innerHTML = "homie";
} 

else if(user == "Safi"){
    document.getElementById("my").innerHTML = "buddy";
}

else if(user == "" || user == null){
    document.getElementById("my").innerHTML = "enter your name idiot!!";
}

else if(user == "Israt" || user == "Ema" || user == "Ima" || user == "Eichi" || user == "Arisa" ){
    document.getElementById("my").innerHTML = "FUCK YOU BITCH";
}

else if(user == "Kabbo"){
    document.getElementById("my").innerHTML = "close friend";
}

else{
    document.getElementById("my").innerHTML = "idk you or maybe you spelled your name wrong";
}

}