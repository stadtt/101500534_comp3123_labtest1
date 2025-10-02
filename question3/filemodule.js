const fs = require('fs');
const path = require('path')

const dir = path.join(__dirname,"logs");

function FileModule(){

    if(fs.existsSync(dir)){
        console.log("dir exists")
        const file = fs.readdirSync(dir);
        file.forEach(file => { 
            const filepath = path.join(dir, file );
            console.log(`deleting ${file}`)
            fs.unlinkSync(filepath)
            
        } )
        fs.rmSync(dir, { recursive: true, force: true });

    }else{
        console.log("dir doesnt exists")
        fs.mkdirSync(dir);
        for(let i = 1; i <  11; i++ ){
         const file = path.join(dir, `log${i}.txt`);
           fs.writeFileSync(file, `Log${i}`)
           console.log(`log${i}.txt`);
      }

    }
}

FileModule();
