//CommonJs library:  Module every file in module by default
//MModules EnCapsule Code only share the minimum
//seared Data
let userName="userName";
let userEmail ="user@name.gmail.com";
//Local Data
let userPassword="*********"//I don't want to share this property withe 02-module, so I'll use methode call
module.exports={userName,userEmail}

