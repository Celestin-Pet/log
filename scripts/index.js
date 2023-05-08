// console.log("clairon");
// // console.log(clairon);
// console.log("12");
// console.log(12);

// var p=document.getElementById("para");
// console.log(p);
//  p= document.getElementById("para").innerHTML="i hate u";
//  console.log(p);
//  p= document.getElementById("para").style["color"]="green";
//  console.log(1+2)
// console.log("C and P")

// //  create element
// // const l=document.createElement("div");
// // l.id="main";
// const para= document.createElement("p");
// para.id= "para";
// para.innerHTML="i love you";
// // l.appendChild(para);
// document.body.appendChild(para);

// //dates
// let r= document.getElementById("dat");
// let k = new Date();
// r.innerHTML= k;
// // console.log(r);

// let b=new Date("2003-09-28");
// r.innerHTML=b;

// let n= b.getDay();
// r.innerHTML=n;
// let w=b.getMonth();
// r.innerHTML=w;


// //window
// let windo= window.location.href;
// let win=document.getElementById("window");
// win.innerHTML=windo;

// windo= window.location.hostname;
//  win=document.getElementById("window");
// win.innerHTML=windo;

// window.alert("hey");
// const f=document.getElementById("save");
// f.addEventListener("click",()=>{
//     f.innerHTML="love";
//     alert("are u sure u want to save")
// })

// const cl=setInterval(()=>{
//   window.location.href="https://instagram.com"
// },4000);
// clearInterval(cl);


//mapping

// const numbers=[1,-1,2,3];

// const filtered = numbers.filter(n=>n>=0);
// const items=filtered.map(n=>"<li>"+n+"<li>");
// const html=items.join();
// console.log(html);

// let a=[1,2,3,5,6,7];
// a.map((number)=>{
//   console.log("number is ${number}");

// });

// let newArray = ["Musab", "I", "Handsome"];    
// let [noun, pronoun, adjective] = newArray; 

// The above can also be rewritten as this:  

// let [noun, pronoun, adjective] = ["Musab", "I", "Handsome"];    

// console.log(noun);    
// console.log(pronoun);

// let newArray = [a, b, c, d, e];
// let [firstLetter, , , ,lastLetter] = [a, b, c, d, e];
// console.log(firstLetter);
function myName(Musab, Habeeb) {        
  alert("Musab Habeeb");    
}    

let display = `This displays my name ${myName()}`