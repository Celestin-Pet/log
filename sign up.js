let form= document.getElementById("signupform");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let username= form.username.value
    let mail=  form.mail.value
    let pswd= form.pswd.value
    let cpswd=  form.confirm.value
    console.log(username, mail, pswd, cpswd);

    let person= {
      username:username,
      mail: mail,
       pswd: pswd,
    } 
console.log(person);
let arrey= []

console.log(arrey)
arrey.push(person);
console.log(arrey)

// let arr = localStorage.setItem("array", JSON.stringify(arrey));

let finalArray = JSON.parse(localStorage.getItem("array"));
finalArray.push(person);

localStorage.setItem("array", JSON.stringify(finalArray));

if(form.username.value==="" || form.mail.value==="" || form.pswd.value===""){
  alert("First Sign Up")
}else{
  // alert("welcome")
  window.location.href = "./localstorage.html"
}


// finalarray.push(person);

// localStorage.setItem("user", JSON.stringify(finalarray));
// console.log(arrey);

});



// let arreyi= ["Prosper", "Ange", "Marquise", "Angelo", "Elvis", "Patrick", "Albert", "Supervisor"]
// console.log("arreyi", arreyi)

// let finalarrey = arrey.filter((person)=> person === prosper)



// let array= [1, 3, 3, 4, 2, 2, 3, 4, 5, 3, 4, 43, 34, 5];
// console.log ("arrey", arrey);

// let finalArray = arrey.filter((item)=> item === 43);

// console.log("finalArrey", finalArray);

// if(finalArray.lenth 1 = 0) {
//     console.log('item is found $(finalArray[0])');
// } else {
//     console.log("element is not found");
// }

// let arrey = []
// SubmitEvent.add('click', () =>{
//     array.push(person);
// })
