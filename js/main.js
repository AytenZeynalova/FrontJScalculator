var numb1= document.querySelector(".num1");
var numb2= document.querySelector(".num2");
let btnplus=document.querySelector(".plus");
let btnminus=document.querySelector(".minus");
let btnmultp=document.querySelector(".multp");
let btndivide=document.querySelector(".divide");

// do{

//     numb1=num1.value;
//     numb2=num2.value;
// }while(isNaN(numb1) && isNaN(numb2));


btnplus.addEventListener("click", function(){
  
    if(!isNaN(numb1.value) && !isNaN(numb2.value)){

        alert(Number(numb1.value)+Number(numb2.value));
    }
    else{
        alert("duzgun deyer daxil edin")
    }
    
})

btnminus.addEventListener("click", function(){
  
    if(!isNaN(numb1.value) && !isNaN(numb2.value)){

        alert(Number(numb1.value)-Number(numb2.value));
    }
    else{
        alert("duzgun deyer daxil edin")
    }
    
})

btnmultp.addEventListener("click", function(){
  
    if(!isNaN(numb1.value) && !isNaN(numb2.value)){

        alert(Number(numb1.value)*Number(numb2.value));
    }
    else{
        alert("duzgun deyer daxil edin")
    }
    
})


btndivide.addEventListener("click", function(){
  
    if(!isNaN(numb1.value) && !isNaN(numb2.value)){

        alert(Number(numb1.value)/Number(numb2.value));
    }
    else{
        alert("duzgun deyer daxil edin")
    }
    
})




