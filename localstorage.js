let inputf = document.getElementById("loginform");
inputf.addEventListener("submit", (e)=>{
    e.preventDefault()
    let email= inputf.email.value
    let psw= inputf.pswd.value
    console.log(email,psw)
    
    let clan = JSON.parse(localStorage.getItem("array"));
    console.log(clairon)

    let filt= clan.filter((item)=>item.mail===email);
    if(filt.length==0){
        alert("First Sign Up")
    }else{
        alert("you welcome")
    }
}); 

