let checkButton=document.querySelector(".btn-check");
let birthDayDate=document.querySelector("#birthdayDate");
let luckyNumber=document.querySelector("#luckyNumber");
let result=document.querySelector(".result");
checkButton.addEventListener("click",function(e){
    if(birthDayDate.value!=""&&luckyNumber.value!=""){

        let birthDayDateValue=birthDayDate.value.replaceAll("-","");
        let luckyNumberValue=luckyNumber.value;
        checkBirthLucky(birthDayDateValue,luckyNumberValue);
    }
})

function checkBirthLucky(DOB,luckyNo){
    let sum=0;
    for(let i=0;i<DOB.length;i++){
       sum=sum+parseInt(DOB[i]);
    }
     if(sum%luckyNo==0){
       result.innerText="Congrats,your birthday is lucky for you."
     }
     else{
         result.innerText="Sorry,your birthday is not so lucky.";
     }
}