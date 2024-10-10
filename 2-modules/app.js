const userNameEndEmail=require('./01-module');
const logUser=require('./02-module')
const userdata=require('./03-module');
require('./04-module')
logUser(userNameEndEmail);
for (let key in userdata['user']) {
    console.log(userdata["user"][key])
}
