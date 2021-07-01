const fs = require('fs') //引入fs文件，用于读文件
const { url } = require('inspector')

// 读数据库
const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)
// console.log("usersString的类型是：" + typeof usersString)
// console.log(usersString)
// console.log(typeof usersArray)
// console.log(usersArray instanceof Array)
console.log(usersArray)

//写数据库
const user3 = { "id": 3, "name": "ny", "password": "nnn" }
usersArray.push(user3)

//存数据库
const string = JSON.stringify(usersArray) //文件只能存字符串
fs.writeFileSync('./db/users.json', string)