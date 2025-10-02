
function lowercaseWords(array){
 let myPromise = new Promise((resolve,reject) => { 

    filteredArray = array.filter((item) =>typeof item  === "string" ).map(item => item.toLowerCase());

        if(filteredArray.length > 0 ){
           resolve(filteredArray);
        }
        else{
            reject("Array has no string to be filtered!");
        }
 } 
    );
    return myPromise;
};

async function callLowerCase(array){
    try{
        
        let response = await lowercaseWords(array);
        console.log(response);
    }
    catch (error) {
        console.log(error);
 } 
}
callLowerCase(["PIZZA",10,true,25,false,"Wings"]);
callLowerCase([534,23423]);