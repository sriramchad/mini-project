function a(){
    var email=document.getElementById("email");
    var phone=document.getElementById("phone");
    var name = document.getElementById("name");
    if(name.value.trim() == "" || email.value.trim()==" " || phone.value.trim()==""){
        alert("no blanks allowed please enter valid name")
        return false;   
    
     }else if(name.value==phone.value==email.value){
        alert("Three are same");
        return false;
     }
     else if(phone.value.trim()==""||phone.value=="text"||phone.value!="[6:9]{1}[0-9]{9}"){
        alert("Invalid Type valid phone number")
        return false;
     }else{
        true;
     }
}