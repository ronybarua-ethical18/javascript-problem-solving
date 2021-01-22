// Github Link: https://github.com/ronybarua-ethical18/javascript-problem-solving/blob/main/assignment.js

// Problem 1 solving section start from here ----------------------------------------------------------------------
// converting kilometer to meter 
function kilometerToMeter(kilometer) {
    var meter = 0;
    // to make sure the kilometer value is not null, not less than zero and type is not string
    if (kilometer != null && kilometer > 0 && typeof kilometer != 'string') {
        meter = kilometer * 1000;
    }
    else {
        return 'Check your parameter value is inappropriate';
    }
    return meter;
}
var kiloToMeter = kilometerToMeter();         //calling the function
console.log('Kilometer to Meter: ', kiloToMeter);
// Problem 1 solving section end here ----------------------------------------------------------------------------


//Problem 2 solving section start from here ----------------------------------------------------------------------
//coding to calculate budget for buying watch, phone and laptop according to their amount
function budgetCalculator(watch, phone, laptop) {
    var estimatedCosts = 0;
    //checking parameter value is null, less than 0 or string
    if (((watch, phone, laptop) != null) && ((watch, phone, laptop) > 0) && (typeof (watch, phone, laptop) != 'string')) {
        var itemOne = watch * 50;
        var itemTwo = phone * 100;
        var itemThree = laptop * 500;
        estimatedCosts = itemOne + itemTwo + itemThree;
    }
    else {
        return 'Check paremeter values';
    }
    return estimatedCosts;
}
var budgetNeed = budgetCalculator();     //calling the function
console.log("Budget Calculator: ", budgetNeed);
//Problem 2 solving section end here -----------------------------------------------------------------------------


//Problem 3 solving section start from here ----------------------------------------------------------------------
// coding to find out total cost based on stay time at hotel
function hotelCost(stayTime) {
    var totalCost = 0;
    // to make sure parameter value is not null, not less than zero and type is number
    if (stayTime != null && stayTime > 0 && typeof stayTime != 'string') {
        if (stayTime <= 10) {
            totalCost = stayTime * 100;
        }
        else if (stayTime <= 20) {
            var packageOne = 10 * 100;          //packageOne value is 100 / day
            var extraDay = stayTime - 10;
            var packageTwo = extraDay * 80;
            totalCost = packageOne + packageTwo;
        }
        else {
            packageOne = 10 * 100;
            packageTwo = 10 * 80;               //packageTwo value is 80 / day
            extraDay = stayTime - 20;
            var packageThree = extraDay * 50;   //packageThree value is 50 / day
            totalCost = packageOne + packageTwo + packageThree;
        }
    }
    else {
        return 'Check parameter value and type';
    }
    return totalCost;
}
var costs = hotelCost();          //calling the function
console.log('Hotel Costs: ', costs);
//Problem 3 solving section end here -----------------------------------------------------------------------------


//Problem 4 solving section start from here ----------------------------------------------------------------------
// coding to find largest name from an array 
function megaFriend(friendsName) {
    var largestName = '';
    if (friendsName != null && friendsName.length != 0) {   //to make sure parameter and array value is not empty
        var charCounter = 0;
        for (var i = 0; i < friendsName.length; i++) {
            if (isNaN(friendsName[i])) {                    //to make sure array value is not a number
                var namesLength = friendsName[i].length;    //to get full length of individual string
                if (namesLength > charCounter) {
                    charCounter = namesLength;
                    largestName = friendsName[i];           //holds the largest value of the array
                }
            }
            else {
                return 'Parameter value should be string';
            }
        }
    }
    else {
        return 'Parameter and Array value can not be empty';
    }
    return largestName;
}
var longestName = megaFriend([]);  //calling the function
console.log('Mega Friends: ', longestName);
//Problem 4 solving section end here -----------------------------------------------------------------------------