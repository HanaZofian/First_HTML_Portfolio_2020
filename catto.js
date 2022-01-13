function validation(){
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding= "10px";


    if (isNaN(phone) ||  ( (phone.length >15) || (phone.length<5) ) ){
        text="Please enter a valid phone number";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <10){
        text="Please enter more than 10 characters";
        error_message.innerHTML = text;
        return false;
    }
   

    alert("Form is sent! Thank you :) ")
return true;
}