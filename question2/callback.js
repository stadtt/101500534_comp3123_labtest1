
function delayedSuccess(){
   let myPromise = new Promise( (resolve,reject) => {
    setTimeout(() =>{
        resolve({"message": "Delayed Success!"});
    }, 500);

    });
    return myPromise;
}


function delayedException(){
let myPromise = new Promise(reject => {
    setTimeout(() =>{
        reject(new Error("delayed exception!"))
    }, 500)

    });
    
    return myPromise;
}

async function callPromises(callback){
    try{
        let response = await callback;
        console.log(response);
    }catch(error){
        console.error(error.mesage)
    }
}

callPromises(delayedSuccess());
callPromises(delayedException());