import { appendFile } from 'fs'
import * as fs from 'fs/promises'

try{
  await fs.copyFile('README.md','info.txt')
}catch(error){
  console.log(error)
}