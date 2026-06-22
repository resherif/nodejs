const fsPromises = require("fs").promises;
const {v4: uuid} = require("uuid");
const path = require("path");
const fileOps = async () => { 
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf-8");
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,"files","promesesNew.txt"), data);
        await fsPromises.appendFile(path.join(__dirname,"files","promesesNew.txt"),'\n nice to meet you data appended');
         await fsPromises.rename(path.join(__dirname,"files","promesesNew.txt") , path.join(__dirname,"files","promesescompleted.txt") ,'\n nice to meet you data appended');
    } catch (err) {
        console.error(err);
    }
}
fileOps();
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// fs.writeFile(path.join(__dirname , 'files', 'reply.txt') ,'take it',(err) => { 
//     if (err) throw err;
//     console.log("Write complete");
//     fs.appendFile(path.join(__dirname , 'files', 'reply.txt') ,'\n\n testing file',(err) => { 
//     if (err) throw err;
//     console.log("addition complete");
// });
// });

process.on("uncaughtException", err => { 
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})