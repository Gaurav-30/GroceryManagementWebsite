// function validate(){

    // document.getElementById("inp1").style.color = "blue";
    // var i1 = document.getElementById("inp1").value;
    // var i2 = document.getElementById("inp2").value;
    // var i3 = document.getElementById("inp3").value;
    
    // if(i1=="" || i2=="" || i3==""){
    //     alert("Please Fill The Form Correctly");
    // }
    // else{
    //     alert("Your Data Submitted.");
    // }
// }


function validate() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var i1 = document.getElementById("inp1").value;
        var i2 = document.getElementById("inp2").value;
        var i3 = document.getElementById("inp3").value;
   
        if(i1=="" || i2=="" || i3==""){
                 document.getElementById("ch").innerHTML =  this.responseText;
             }
        else{
                 alert("You have Registered Successfully.");
         }
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }

$(document).ready(function(){
    $("button").click(function(){

        if(!$("#inp1").val())
          $("#inp1").css("background-color", "red");
          // $("#inp1").css( "border-style", "solid").css("border-color", "red");

        if(!$("#inp2").val())
          $("#inp2").css("background-color", "red");

        if(!$("#inp3").val())
          $("#inp3").css("background-color", "red");
        
    });
  });