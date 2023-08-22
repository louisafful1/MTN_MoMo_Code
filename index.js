
    let randomId = Math.floor(Math.random() * 1000000000000).toString().slice(0, 11);
    let pwd = 1234;
    let momo = prompt("Dial code");
    if (momo == "*170#") {
        let menu = prompt("Menu\n1) Transfer Money\n2) MoMoPay & Pay Bill\n3) Airtime & Data Bundles \n4) Allow Cashout\n5) Financial Services \n6) My Wallet");
        if (menu == 1) {
            let transfer = prompt("Transfer Money\n1) MoMo User\n2) Non MoMo User\n3) Send with Care\n4) Favorite\n5) Other Networks\n6) Bank Account\n0) Back");
            if (transfer == 1) {
                let fnum = prompt("Enter Mobile Number");
                if (!fnum) {
                    alert("Please Enter number");
                    exit();
                }
                let snum = prompt("Confirm Number");
                if (!snum) {
                    alert("Please Confirm number");
                    exit();
                }
                if (fnum == snum) {
                    let amount = prompt("Enter Amount");
                    let reference = prompt("Enter Reference");
                    let confirmation = prompt("Transfer to - " + fnum + " for GHS " + amount + " with reference " + reference
                        + ". Fee is GHS 0.00, Tax amount is GHS 0.00. Total amount is GHS " + amount + ". Enter MM PIN to continue or 2 to cancel. ");
                    if (confirmation != pwd) {
                        alert("Your entered a wrong PIN");
                    } else {
                        let message = alert("You have sent GHS " + amount + " to " + fnum + ". Fee is GHS 0.00, Tax amount is GHS 0.00. Message -. Your Balance is 100.00. Transaction ID " + randomId + ". Thank you for using Mobile Money.");
                    }
                } else {
                    alert("Number mismatched");
                }
            }
        } else if (menu == 3) {
        } else if (menu == 4) {
        }
    } else {
        alert("MMI code not found");
    }
