/*console.log("we are here")
let form = document.getElementById("form")
form.addEventListener("submit",()=>{
alert("12334")
})*/



/*const buton=document.getElementById("buton");

buton.addEventListener("submit",(event)=>{
    event.preventDefault();
    let text=buton.username.value;
    let pass=buton.password.value;
    window.alert(text);
    window.alert(pass);
    if(text==''){
        alert("please fill in the name");
    }
    
    buton.reset();
});
*/

/*let email = document.getElementById ("email")
let name = document.getElementById ("name")
let buton =document.querySelector("#buton")*/

let mail = document.querySelector (".form3");

 mail.addEventListener("submit",(event)=>{
    event.preventDefault();

    let email= mail.email.value
    let pass1= mail.pass1.value
    console.log(email,pass1);

    let client = JSON .parse(localStorage.getItem("array"));
    console.log(client);
    let filt= client.filter((item)=>item.email===email);

    if(filt.length==0){
        alert("first login")
    }else{
        alert("login successfully")
    }
    
});

/*let email=document.getElementById("emails");
let pass=document.getElementById("pswrd");
let btn=document.querySelector(".btn");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(email.value);
   let fArray= JSON.parse(localStorage.getItem("array"));
   console.log(fArray);
   let arr=fArray.filter((item)=>item.email===email.value);
   if (arr.length==0){
    alert("first signin");
   }else{
    alert("login successfully")
   }
console.log("filteredArray",arr)




https://github.com/munezero-grace/htmlCss_levelUp-project/tree/main

})*/