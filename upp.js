 /*
 getting the data= by getting each elements and easy to  debug
 console.log
 handle event("click")  - add event listerner on button clıck 
 getting current value
 push object
 console.log(array)
 store in local storage // database


 if condition
  if(email.value=== ''){
    return alert("please enter your email") and regulary expression when they send you to mix leter with numbers ın strong password
&& == and / or==||

  }
 */
 
 let form = document.getElementById("form2")

 ///let user = document.ge---byıd("user")
 ///let button =document.queryselector(.classname)
form.addEventListener("submit",(event)=>{
    ///
    event.preventDefault()
    let user = form.user.value
    let email = form.email.value
    let pass = form.pass.value
    console.log(pass,user,email)
///console.log("user" , user.value);

    //localStorage.setItem("user",user) 

    
   let user1 = {
    ///let user={  name :user .value}
    name: user,
    email:email ,
    password: pass,
    };
    console.log(user1);



let arr = [];//an empty array
arr.push(user1);// to add it in an array
console.log(arr);



let finalArray= JSON.parse(localStorage.getItem("array")) || [];
finalArray.push(user1);
console.log(finalArray)
localStorage.setItem("array", JSON.stringify(finalArray));
//let arr=Array.filter((item)=>item.email===email.value);
    
   
});

 


