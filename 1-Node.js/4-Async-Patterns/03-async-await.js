function asyncFunction(){
    setTimeout(_=>console.log("Async Function"),2000)
}
const testAsync= async ()=>{
  try{
      await asyncFunction();
  }catch (err){
      console.log(err)
  }
  finally {
      console.log("finally")
  }

}
testAsync();
console.log("Sync Function");
/**
 * let's create a dimo of a simple async login
 * login func sync
 * auth func async
 * showPage
 * */
const login= async (Email,Password)=>{
    const userCredentials={Email,Password};
    try {
    await auth(userCredentials)
    }catch (err){
        console.log(err)
    }
    console.log("check user authentication")
}
const auth=(userData)=>{
   setTimeout(()=>{
      if (userData.Email!=null && userData.Password!=null){
          console.log("Valid user ✔ ")
      }else {
          console.log("in Valid User ❌")
      }
   },3000)
    console.log("keep Showing Page")
}
login("userName","pass");




