const crypto = require("node:crypto");

const MAX_CALL = 7;
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 7
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// // crypto.pbkdf2Sync("password","salt",100000,512,"sha512")


// console.log(`hashing time ${Date.now() - start}`)

for(let i = 0 ; i < MAX_CALL ; i++){
    crypto.pbkdf2('password','salt',20000,512,"sha512",()=>{
        console.log(`Hash${i+1} ${Date.now() - start}`)
    })
}