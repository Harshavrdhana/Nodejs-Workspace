import fs from 'fs'



//Blocking code

console.log("start");
alert("Block");
console.log("Ended");

//Non Blocking Code

console.log("Start");
setTimeout(() => {
  alert("Non Blocking");
}, 1000);
console.log("Ended");

//****************************************************
//Real world example
//Without callback or Blocking code

console.log('Start')

let data = fs.readFileSync("text.txt")
console.log(data.toString());

console.log("Ended")

//With Callback

console.log("Start")

fs.readFile('text.txt',(error,data)=>{
  if(error) throw error;
  console.log(data.toString());
})

console.log('Ended')