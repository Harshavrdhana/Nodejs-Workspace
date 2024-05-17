import EventEmitter from 'events'

const customEvent = new EventEmitter();

// customEvent.on('response' , (name,id)=>{
//   console.log(name, id)
// })


// customEvent.emit('response', 'harsha', 18)
// customEvent.emit('response', 'harsha', 18)

//asynchronous
function add (a,b){
  return a+b;
}
customEvent.on('asyncEvent' , async()=>{
  const result = await add(2,2);
  console.log(result)
})

customEvent.emit('asyncEvent')