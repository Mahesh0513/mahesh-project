class Account {

    acc_bala = 5000;
    min_bala = 500

    open_Acc() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount(Amount) {
        console.log(Amount,":Amount Deposited Successfully")
    }
    get_Bal() {
        console.log("Server Busy")
    }
    withdrawl() {
        console.log("Insuffient Balance! Month Ending")
    }
    get_Statement() {
        console.log("Charges apply")
    }

}
let a1 = new Account()
console.log(a1)
a1.open_Acc()
a1.deposit_Amount(6000)
a1.get_Bal()
a1.withdrawl()
a1.get_Statement()
