
var 	acc_no  = document.getElementById("firstNumber") .value;

function myFunction() {
  alert("Hello! I am an alert box!");
}

function multiplyBy()
     {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
          if(num1=='0'){ 
		alert ( 'account number is required' ) ;
                      }
          if(num1=='1') 
		      {    
		      location.href = 'https://www.javascripttutorial.net/';

			}     
                                  
          if(num1=='2') 
          function myFunction() { alert("Hello! I am a happy box!");
                                 }              				
              document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}


