

const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
let totalBalance = 25;
const userDeposit = document.getElementById("userDeposit");

const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});



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
		      location.href = '  https://htmlpreview.github.io/?https://github.com/zeeshanzaidi1974/lesson5a/blob/main/index.html';

			}    
           if(num1=='2') 
		      {    
		   let x = document.createElement("INPUT"); 
                   x.setAttribute("type", "number");   ;

			}     
                                  
          if(num1=='3') 
                        				
              document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}


