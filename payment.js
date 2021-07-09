function update(){
        const n1 = Number(sessionStorage.getItem("data1"));
        const n2 = Number(sessionStorage.getItem("data2"));
        const n3 = Number(sessionStorage.getItem("data3"));
        const n4 = Number(sessionStorage.getItem("data4"));
        const n5 = Number(sessionStorage.getItem("data5"));
        const n6 = Number(sessionStorage.getItem("data6"));
        const n7 = Number(sessionStorage.getItem("data7"));
        const n8 = Number(sessionStorage.getItem("data8"));
        const n9 = Number(sessionStorage.getItem("data9"));
        const n10 = Number(sessionStorage.getItem("data10"));
        const n11 = Number(sessionStorage.getItem("data11"));
        const n12 = Number(sessionStorage.getItem("data12"));
        const n13 = Number(sessionStorage.getItem("data13"));
        var sum=0;
        var t=0;



        if(n1){
        document.getElementById("price1").innerHTML = n1;
        document.getElementById("out1").innerHTML = "="+(n1*40)+"Rs";
        sum+=(n1*40);
        t+=1;
        }
        if(!n1){
            document.getElementById("o1").style.display = "none";
        }




        if(n2){
            document.getElementById("price2").innerHTML = n2;
            document.getElementById("out2").innerHTML = "="+(n2*100)+"Rs";
            sum+=(n2*100);
            t+=1;
        }
        if(!n2){
            document.getElementById("o2").style.display = "none";
        }






        if(n3){
            document.getElementById("price3").innerHTML = n3;
            document.getElementById("out3").innerHTML = "="+(n3*120)+"Rs";
            sum+=(n3*120);
            t+=1;
        }
        if(!n3){
             document.getElementById("o3").style.display = "none";
        }







        if(n4){
            document.getElementById("price4").innerHTML = n4;
            document.getElementById("out4").innerHTML = "="+(n4*20)+"Rs";
            sum+=(n4*40);
            t+=1;
        }
        if(!n4){
            document.getElementById("o4").style.display = "none";
        }






        if(n5){
            document.getElementById("price5").innerHTML = n5;
            document.getElementById("out5").innerHTML = "="+(n5*200)+"Rs";
            sum+=(n5*200);
            t+=1;
        }
        if(!n5){
            document.getElementById("o5").style.display = "none";
        }
        



        if(n6){
            document.getElementById("price6").innerHTML = n6;
            document.getElementById("out6").innerHTML = "="+(n6*225)+"Rs";
            sum+=(n6*225);
            t+=1;
        }
        if(!n6){
            document.getElementById("o6").style.display = "none";
        }




        

        if(n7){
            document.getElementById("price7").innerHTML = n7;
            document.getElementById("out7").innerHTML = "="+(n7*50)+"Rs";
            sum+=(n7*50);
            t+=1;
        }
        if(!n7){
            document.getElementById("o7").style.display = "none";
        }




        if(n8){
            document.getElementById("price8").innerHTML = n8;
            document.getElementById("out8").innerHTML = "="+(n8*100)+"Rs";
            sum+=(n8*100);
            t+=1;
        }
        if(!n8){
            document.getElementById("o8").style.display = "none";
        }




        if(n9){
            document.getElementById("price9").innerHTML = n9;
            document.getElementById("out9").innerHTML = "="+(n9*80)+"Rs";
            sum+=(n9*80);
            t+=1;
        }
        if(!n9){
            document.getElementById("o9").style.display = "none";
        }



        if(n10){
            document.getElementById("price10").innerHTML = n10;
            document.getElementById("out10").innerHTML = "="+(n10*70)+"Rs";
            sum+=(n10*70);
            t+=1;
        }
        if(!n10){
            document.getElementById("o10").style.display = "none";
        }




        if(n11){
            document.getElementById("price11").innerHTML = n11;
            document.getElementById("out11").innerHTML = "="+(n11*100)+"Rs";
            sum+=(n11*100);
            t+=1;
        }
        if(!n11){
            document.getElementById("o11").style.display = "none";
        }



        if(n12){
            document.getElementById("price12").innerHTML = n12;
            document.getElementById("out12").innerHTML = "="+(n12*200)+"Rs";
            sum+=(n12*200);
            t+=1;
        }
        if(!n12){
            document.getElementById("o12").style.display = "none";
        }





        if(n13){
            document.getElementById("price13").innerHTML = n13;
            document.getElementById("out13").innerHTML = "="+(n13*400)+"Rs";
            sum+=(n13*400);
            t+=1;
        }
        if(!n13){
            document.getElementById("o13").style.display = "none";
        }



         document.getElementById("total").innerHTML = sum+"Rs";
         document.getElementById("no").innerHTML = t;
    }
    
    // function prt(p){
    //     var msg = document.createElement("p");
    //     msg.id.ad
    
    // }
