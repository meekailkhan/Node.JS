const path = require("node:path");

console.log(__filename)
console.log(__dirname)

// basename 
console.log(path.basename(__filename,'.js')) // path-module
console.log(path.basename(__dirname)) // module

// extname
console.log(path.extname(__filename)) // .js 
console.log(path.extname('index.pipe.js')) // .js
console.log(path.extname('.gitignore')) // ''
console.log(path.extname('index.')) // '.'

// isAbsolute
console.log(path.isAbsolute(__dirname)) // true
console.log(path.isAbsolute(__filename)) // true
console.log(path.isAbsolute('./node/js')) // false

// parse
console.log(path.parse(__dirname)) 
// {
// root: '/',
// dir: '/home/pc/Desktop/backend/codevolution',
// base: 'module',
// ext: '',
// name: 'module'
//   }
// console.log(path.parse(__filename))

console.log(path.format({
    root: '/',
    dir: '/home/pc/Desktop/backend/codevolution',
    base: 'module',
    ext: '',
    name: 'module'
}))

console.log(__filename)