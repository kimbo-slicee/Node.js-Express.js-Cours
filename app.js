const userNameEndEmail=require('./2-modules/1-my-modules/01-module');
const logUser=require('./2-modules/1-my-modules/02-module')
const userdata=require('./2-modules/1-my-modules/03-module');
require('./2-modules/1-my-modules/04-module');
logUser(userNameEndEmail);
for (let key in userdata['user']) {
    console.log(userdata["user"][key])
}
/*Built in Models*/
const osInfo=require('./2-modules/2-buit-in-modules/01-OS');
console.log(osInfo)
console.log(require('./2-modules/2-buit-in-modules/01-OS').localos);
console.log()
const userInfo=require("./2-modules/2-buit-in-modules/01-OS")
console.log(userInfo);
/*Path Module */
const pathModule=require('./2-modules/2-buit-in-modules/03-PATH')
console.log(pathModule);
require('./2-modules/2-buit-in-modules/02-FS')

