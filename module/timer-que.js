// setTimeout(()=> console.log('this is setTimeout'),0);

// process.nextTick(()=>{
//     console.log('this is nextTick');
// })

// Promise.resolve().then(()=>{console.log('this is promise resolve')})


setTimeout(()=> console.log('this is setTimeout 1'),0)
setTimeout(()=> {
    console.log('this is setTimeout 1');
    process.nextTick(()=>{
        console.log('this is inner nextTick')
    })
},0)
setTimeout(()=> console.log('this is setTimeout 3'),0)


process.nextTick(()=>{
    console.log('this is nextTick ')
})

Promise.resolve().then(()=> console.log('this is promise resolve'))