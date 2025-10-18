let accounts = [];
function myBank(){
    let choice = prompt("Menu: MakeCodeLitBank\n [1.]Open Account\n [2.]Deposit\n [3.]Withdraw\n [4.]Veiw Balance\n [5.]View Transaction\n [6.]Switch active account\n [7.]Close accounts\n [8.]All accounts summary\n [9.]Export session summary\n [0.]Exit\n Enter choice");
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