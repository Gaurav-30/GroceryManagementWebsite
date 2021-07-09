function validate(){
    var input1 = document.getElementById("one").value;
    var input2 = Number(document.getElementById("two").value);
    document.getElementById("one").value = "";
    document.getElementById("two").value = "";
    if(input1=="" || input2=="" || input2==NaN){
        alert("Please Fill All the Columns");
    }
    else{
        alert("Your Data Submitted.");
        location.replace("main.html");
    }
}
