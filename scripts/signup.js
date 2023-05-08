let form=document.getElementById("parent");
let usern=document.getElementById("user");
let email=document.getElementById("email");
let pswrd=document.getElementById("pass");
let confirm=document.getElementById("confirm");
let btn= document.querySelector(".btn");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let username=usern.value;
    console.log(username)
    let uemail= email.value;
    let upasswrd=pswrd.value;
    let uconf=confirm.value;
    // console.log(username,uemail,upasswrd,uconf);
    // console.log(userdata);
    // let emails=document.getElementById("emails");
    let person ={
        username:username,
        email:uemail,
        password:upasswrd,
        confirm:uconf
    }
    console.log(person);
    
    let array=[];
    array.push(person);
    console.log(array);

    // localStorage.setItem("array",JSON.stringify(array));
    let finalarray=JSON.parse(localStorage.getItem("array"));
    finalarray.push(person);
    localStorage.setItem("array",JSON.stringify(finalarray))
    // let arr=array.filter((item)=>item.email===emails.value);
    
    
    // console.log(arr)

    // localStorage.setItem("name",username);
    // localStorage.setItem("email",uemail);
    // localStorage.setItem("password",upasswrd);
    // localStorage.setItem("confirm",uconf);
    
});
