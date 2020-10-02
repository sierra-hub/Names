$(document).ready(function(){
    $("#myBirthDate").mask("99/99/9999");
});


function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><strong>YOU DID NOT ENTER VALID INFO</strong></div>";
    }
    else {
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    document.getElementById('message').innerHTML = "&nbsp;&nbsp; You were born on <span>" + days[dayOfTheWeek] + "</span> and Your Akan Name is <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                }
                else {
                    document.getElementById('message').innerHTML = "&nbsp;&nbsp; You were born on <span>" + days[dayOfTheWeek] + "</span> and Your Akan Name is <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                }
                break;
            }    
            else {
                document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Should Select a Gender Too Determine Your Akan Name!</div>";
            }
        }
    }
}

function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}