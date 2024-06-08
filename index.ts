#!/usr/bin/env node
import inquirer from "inquirer"

let totalbalance=10000;
let mypin=1234;
let pinanswer=await inquirer.prompt([
    {name:"pin",
        type:"number",
        message:"please enter your pin",
    }
])
//write pin code
if(pinanswer.pin==mypin) {
    console.log("you enter a correct pin");
}
else {console.log("wrong answer");};

//choose your operation?
let operationAns=await inquirer.prompt([
    {name:"operation",
        type:"list",
        choices:["withdraw","checkbalance"],
    }
    ]);

//choice current or saving?
if (operationAns.operation=="withdraw"){
let accountType=await inquirer.prompt([{
    name:"account",
    type:"list",
    choices:["current","saving"]
}]);

//write trans method
let transmethod=await inquirer.prompt([{
    name:"method",
    type:"list",
    choices:["cashmethod","fastcash"]
}]);



//if (operationAns.operation=="withdraw"){
    if (transmethod.method=="cashmethod"){
let amountANS=await inquirer.prompt(
    [
    {name:"amount",
        type:"number",
        message:"please enter your amount",
    }
])
//greaaterthan and less than
    if (amountANS.amount>totalbalance){
        console.log("insuffient amount")
    }
    else 
    {totalbalance-=amountANS.amount;
        console.log("my remaining amount is :"+totalbalance)
    } 
}
 if (transmethod.method=="fastcash")
    {
    let fastcashamount=await inquirer.prompt([{
name:"fastcashvalue",
message:"select the amount",
type:"list",
choices:["1000",
    "3000",
    "5000"
]
    }])

    if (totalbalance>-fastcashamount.fastcashvalue){
        totalbalance-=fastcashamount.fastcashvalue
console.log(`your total balance is :${totalbalance}`)
    }
   else (
    console.log(`insuffient balance`)
   )}}

