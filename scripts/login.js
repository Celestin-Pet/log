let email=document.getElementById("emails");
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
})