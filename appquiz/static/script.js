console.log("working");

// var data={"questions":questions};
var data1=document.getElementsByClassName('test').innerHTML;
console.log(data1);
var dataAnswer=data1.children;
console.log(dataAnswer)[0];
document.getElementsByClassName('test').innerHTML=dataAnswer;
console.log(questions);

const demoelement =document.getElementById('demo');
function displayAnswers(){
        data.answers.forEach(answers => {
              bt1.innerHTML=answer1  
              bt2.innerHTML=answer2
              bt3.innerHTML=answer3
              bt4.innerHTML=answer4
        });

}

function getOption(){   
        const opt=document.getElementById("btn1").innerHTML;
        const opt2=document.getElementById("btn2").innerHTML;
        const opt3=document.getElementById("btn3").innerHTML;
        const opt4=document.getElementById("btn4").innerHTML;

        const ans_btn=document.getElementById("ans_btn").innerHTML;
        if(opt == ans_btn){
                alert("Correct");
                document.getElementById("btn1").style.backgroundColor="green";
                document.getElementById("demo").innerHTML="Correct";
                }
                    
        else{
                alert("InCorrect");
                document.getElementById("btn1").style.backgroundColor="blue";
                document.getElementById("demo").innerHTML="InCorrect";
        }

}
function getOption2(){
        const opt2 =document.getElementById("btn2").innerHTML;
        const ans_btn=document.getElementById("ans_btn").innerHTML;
        if(opt2 == ans_btn){
                alert("Correct");
                document.getElementById("btn2").style.color="green";
                document.getElementById("demo").innerHTML="Correct";
                   
        }
        else{
                alert("InCorrect");
                document.getElementById("btn2").style.backgroundColor="red";
                document.getElementById("demo").innerHTML="InCorrect";
                   
               
        }     

}
function getOption3(){
        const opt3=document.getElementById("btn3").innerHTML;
        const ans_btn=document.getElementById("ans_btn").innerHTML;
        if(opt3 == ans_btn){
                alert("Correct");
                document.getElementById("btn3").style.color="green";
                document.getElementById("demo").innerHTML="Correct";
                   
        }
        else{
                alert("InCorrect");
                document.getElementById("btn3").style.backgroundColor="red";
                document.getElementById("demo").innerHTML="InCorrect";
                   
                
        }  

}
function getOption4(){
        const opt4=document.getElementById("btn4").innerHTML;
        const ans_btn=document.getElementById("ans_btn").innerHTML;
        if(opt4 == ans_btn){
                alert("Correct");
                document.getElementById("btn4").style.backgroundColor="green";
                document.getElementById("demo").innerHTML="Correct";
                   
        }
        else{
                alert("InCorrect");
                document.getElementById("btn4").style.backgroundColor="red";
                document.getElementById("demo").innerHTML="InCorrect";
                   
                
        }
                

}
        // const optt=document.getElementById("answer.buttons").innerHTML;
        // console.log(opt1);
        // console.log(ans_btn);
        
        

        
                // ans_btn.style.display="block";
                // ans_btn.innerHTML=`your answer ${opt}`;

                
                // btn.display.style="incorrect";  

                // const button =document.createElement("button");
                // button.addEventListener("click",selectAnswer);
       
        
       
                
function selectAnswer(){
                const button =document.createElement("button");
                button.innerHTML=answers.text;
                button.classList.add("btn");
                answerButtons.appendChild(button);
}    

                
