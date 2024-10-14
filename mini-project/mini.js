function b(){
    var email=document.getElementById("email");
    var pass = document.getElementById("pass");
    if(email.value.trim() == "" || pass.value.trim()==" "){
        alert("no blanks allowed please enter valid name")
        return false;   
    
     }else if(pass.value==email.value){
        alert("Sorry! Three are same");
        return false;
     }else{
        true;
     }
}