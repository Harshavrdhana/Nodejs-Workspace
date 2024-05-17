import * as fs from 'fs'

fs.readFile('C:\\Users\\admin\\OneDrive\\Desktop\\URL\\node.js\\README.md','utf-8',(error,data)=>{
  if(error){
    throw error;

  }else{
    console.log(data)
  }
})