// Main page JavaScript

document.addEventListener("DOMContentLoaded", function(event){

    $("#load").delay(5000).fadeOut(200);
    
    $("#phone_account").fadeOut(0);
    
    const account = document.getElementById("account");
    
    var x = 0;
    
    function switch_page(){
    
        if(x == 0){
            $("#phone_home").fadeOut(0);
            $("#phone_account").fadeIn(0);
            x = 1;
        }
        else{
            $("#phone_account").fadeOut(0);
            $("#phone_home").fadeIn(0);
            x = 0;
        }
    
    }
    
    account.addEventListener("click", () => switch_page(x));
    
    });