//this function will be invoiced in the app model by importing this module
let currenttime=new Date().getHours();
function waekUp(currenttime){
switch (currenttime){
    case 6>=currenttime >=9:
        console.log("Weak Up Brother");
        break;
    case 9>currenttime>=10:
        console.log("Work Time ⏲");
        break
    case 10>currenttime>12:
        console.log("launch Time ");
        break;
    default:
        console.log("holiday")
        break

}
}

waekUp(currenttime)