


function calculateTax(income, expenses){
    if(income <0 || expenses <0){
        return "Invalid input";
    }
    let nitBalance =  income - expenses;
    let totalBalance = nitBalance * 0.2

    return totalBalance;

}





function sendNotification(email){

    let specialChar = email.indexOf('@');

    if (specialChar === -1) {
        return "Invalid Input";
    }
    
    const seperateMail = email.split('@');

    let username = seperateMail[0];

    let domainName = seperateMail[1];

    return username + " " + "sent you an email from " + domainName;
}




// problem 3

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }

    for (let element of name) {
        if (!isNaN(element) && typeof element === 'string') {
            return true;
        }
    }

    return false;
}

console.log(checkDigitsInName('Raj123'))
console.log(checkDigitsInName('n9ayeem'))
console.log(checkDigitsInName('e1mu3'))
console.log(checkDigitsInName('Suman'))
console.log(checkDigitsInName('Name2024'))
console.log(checkDigitsInName('!@#'))
console.log(checkDigitsInName(["Raj"]))

// problem 4


function calculateFinalScore(obj){




    const {name, testScore, schoolGrade, isFFamily} = obj;

    if(typeof obj !== 'object' || typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean'){
        return "Invalid input";
    }
    


    if(testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30){
        return "Invalid input";
    }

    let finalScore = testScore + schoolGrade;

   

    if(isFFamily){
        finalScore += 20;
        
    }
     if(finalScore >=80){
        return true;
    }else{
        return false;
    }

}









    

    

    















function  waitingTime(waitingTimes,serialNumber) {

    if(Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }

    let sum = 0;
    for (const num of waitingTimes) {

        sum = sum + num;

    }
    let devided = sum / waitingTimes.length;
    let avg = Math.round(devided);

    const interviweBaki = serialNumber - 1 - waitingTimes.length;

    return interviweBaki * avg;

    
}





