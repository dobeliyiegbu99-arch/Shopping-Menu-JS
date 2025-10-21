debugger
// let accountName, accountPassword, accountBalance;
let userDetails = [
    {
        accountName : "",
        accountPassword : "",
        accountBalance : "",
        transLog : "",
    }
];
let accounts = [];

// Display Option
function myBank(){
    let choice = prompt("Menu: MakeCodeLitBank\n [1.]Open Account\n [2.]Deposit\n [3.]Withdraw\n [4.]View Balance\n [5.]View Transaction\n [6.]Switch active account\n [7.]Close accounts\n [8.]All accounts summary\n [9.]Export session summary\n [0.]Exit\n Enter choice");
    if(choice === "1"){
        return openAccount();
    } else if(choice === "2"){
        return deposit();
    } else if(choice === "3"){
        return withdraw();
    } else if(choice === "4"){
        return viewBalance();
    } else if(choice === "5"){
        return viewTransacton();
    } else if(choice === "6"){
        return switchActiveAccount();
    } else if(choice === "7"){
       return closeAccount();
    } else if(choice === "8"){
        return allAccountSummary();
    } else if(choice === "9"){
        return exportSessionSummary();
    } else if(choice === "0"){
        return exit();
    } else {
        alert("Invalid Input.");
        myBank();
    }
}

myBank()


// Creating Account (1)
function openAccount(){
    debugger
    userDetails.accountName = prompt("Create Account");
    userDetails.accountPassword = prompt("Set Password");
    userDetails.accountBalance = 0;
    userDetails.transLog = [];
    let account = `Username: ${userDetails.accountName}\nPassword: ${userDetails.accountPassword}\nBalance: ${userDetails.accountBalance} \nTransactions: ${userDetails.transLog}`;
    // userDetails = account;
    accounts.push(userDetails);
    alert(`New account Made:\n${account}`);
    myBank();
}
myBank()

// Deposit (2)
function deposit(){
    debugger
    let credit = prompt(`Deposit amount`);
    let accountCredit = userDetails.accountBalance + Number(credit);
    userDetails.accountBalance = accountCredit;
    userDetails.transLog = `Credit Alert \nAmount: +${credit} \nBalance: ${userDetails.accountBalance} \n`
    // userDetails.transLog +
    let choice = prompt(`Balance:\n${userDetails.accountBalance}\n \n (1)Main menu \n(2)Back`);
    if(choice === "1"){
        return myBank();
    } else if(choice === "2"){
        return deposit();
    } else {
        alert(`Invalid input`);
        return deposit();
    }

}
myBank()


// Withdraw (3)
function withdraw(){
    debugger
    let debit = prompt(`Withdraw amount`);
    let accountDebit = userDetails.accountBalance - Number(debit);
    userDetails.accountBalance = accountDebit;
    userDetails.transLog = `Credit Alert \nAmount: +${credit} \nBalance: ${userDetails.accountBalance} \n`;

    let choice = prompt(`Balance:\n${userDetails.accountBalance}\n \n (1)Main menu \n(2)Back`);
    if(choice === "1"){
        return myBank();
    } else if(choice === "2"){
        return withdraw();
    } else {
        alert(`Invalid input`);
        return withdraw();
    }

}
myBank()

// View Balance (4)
function viewBalance(){
    let choice = prompt(`Balance:\n${userDetails.accountBalance}\n \n (1)Main menu \n(2)Deposit \n(3)Withdraw`);
    if(choice === "1"){
        return myBank();
    } else if(choice === "2"){
        return deposit();
    } else if(choice === "3"){
        return withdraw();
    } else {
        alert(`Invalid input`);
        return viewBalance();
    }
}
myBank()

// View Transaction (5)
function viewTransacton(){
    debugger
    /*let transData = JSON.parse(userDetails)
    let transLogArray = transData.transLog */ 
    let history = "";
    for(let i = 0; i < transLog.length; i++){
        history += (i + 1) + " " + transLog[i] + "\n";
    }
    let choice = prompt(`Transactions:\n${history}\n \n (1)Main menu`);

    if(choice === "1"){
        return myBank();
    } else {
        alert(`Invalid input`);
        return viewTransacton();
    }
}


// Switch Active Account(6)
function switchActiveAccount(){
    if(accounts.length === 0){
        alert("You have no accounts");
        myBank();
    }

    let users = "";
    for(let i = 0; i < accounts.length; i++){
        users += (i + 1) + " " + accounts[i] + "\n"
    }

}


// Exit Option
function exit(){

}