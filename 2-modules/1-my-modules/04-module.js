//this function will be invoiced in the app model by importing this module
function timer(currenTtime){
switch (currenTtime){
    case 6>=currenTtime >=9:
        console.log("Weak Up Brother");
        break;
    case 9>currenTtime>=10:
        console.log("Work Time ⏲");
        break
    case 10>currenTtime>12:
        console.log("launch Time ");
        break;
    default:
        console.log("holiday")
        break

}
}

timer(new Date().getHours())