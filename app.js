// /*My Modules*/
const userNameEndEmail=require('./2-modules/1-my-modules/01-module');
const logUser=require('./2-modules/1-my-modules/02-module')
const userdata=require('./2-modules/1-my-modules/03-module');
require('./2-modules/1-my-modules/04-module');
logUser(userNameEndEmail);
for (let key in userdata['user']) {
    console.log(userdata["user"][key])
}

