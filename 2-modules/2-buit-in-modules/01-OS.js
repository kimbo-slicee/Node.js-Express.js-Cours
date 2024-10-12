/*le's import 🚀 Some built in modules 📰*/
const os =require('os');
// info About The current user 👨‍💻
const userInfo =os.userInfo();
console.log(`get the userInfo using methode userInfo ${userInfo}`)
currentTime=()=>{
    console.log(` the current Time ⏲ in seconds ${os.uptime()/3600}H`);
}
currentTime();
//current os
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemo:os.freemem()

}
console.log('info about the current os'+currentOS);