function a(){
    var pass = document.getElementById("pass");
    var email=document.getElementById("email");
    var phone=document.getElementById("phone");
    var name = document.getElementById("name");
    var pin = document.getElementById("pin");
    if(name.value.trim() == "" || pass.value.trim()==" "){
        alert("no blanks allowed please enter valid name")
        return false;   
    
     }else if(pass.value!=pass.value){
        alert("Password is not same");
        return false;
    }else if(pass.value.trim()=="" || pin.value.trim()==""){
        alert("No Spaces allowed Create Your Valid Proper Password");
        return false;
     }
     else if(phone.value.trim()==""|| phone.value=="[6:9]{1}[0-9]{9}"||phone.value!=""){
        alert("Invalid Type valid phone number")
        return false;
     }
     else if(pin.value.trim()==""||pin.value.length>=7){
         alert("Invalid Type valid pincode number")
         return false;
      }else{
            true;
      }
   }
