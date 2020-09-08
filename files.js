const fs = require('fs');
//reading files
// fs.readFile('./docs/bijou.txt', (err,data) => {
//  if(err){
//      console.log(err);
//  }
//  console.log(data.toString());
// });
// console.log('last line');


//writing files
// fs.writeFile('./docs/bijou.txt', 'Hello World!',()=>{
// console.log('file was written');
// });

// fs.writeFile('./docs/bijou1.txt', 'Hello Bijou!',()=>{
//     console.log('file was written');
//     });

    //directories
// if (!fs.existsSync('./assets'))
// {
// fs.mkdir('./assets', (err)=>{
//  if (err){
//      console.log(err);
//  }
//  console.log('folder created');
// });
// }
// else{
//     fs.rmdir('./assets', (err)=> {
//         if (err){
//             console.log(err);
//         }
//         console.log('folder removed');
//     });
// }
// fs.writeFile('./assets/assets.txt', 'Hello Parallel World !',()=>{
// console.log('file was written');
// });

//deleting files

if (fs.existsSync('./docs/bijou.txt')){

    fs.unlink('./docs/bijou.txt', (err)=> {
        if (err){
                        console.log(err);
                     }
                   console.log('file removed');
    });
}