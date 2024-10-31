//this function will be invoiced in the app model by importing this module
function timer(currenTime){
switch (currenTime){
    case 6>=currenTime >=9:
        console.log("Weak Up Brother");
        break;
    case 9>currenTime>=10:
        console.log("Work Time ⏲");
        break
    case 10>currenTime>12:
        console.log("launch Time ");
        break;
    default:
        console.log("holiday")
        break

}
}

timer(new Date().getHours())