const prom = new Promise((resolve,reject)=>{
    resolve("Hi")
    reject("error")
})


prom.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{console.log("exection completed")})