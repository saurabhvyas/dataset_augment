

var parsedJSON = require('./result.json');

var list=[];

//console.log(parsedJSON['items']);


function run_cmd(cmd, args, callBack ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
} // ()

for (var item in parsedJSON['items'])
 {

 
  list.push('https://www.youtube.com/watch?v=' + parsedJSON['items'][item]['id']['videoId']);

}

//console.log(list);






for ( item in list) {
 
 // console.log(list[item]);
 
  


const exec = require('child_process').exec;
var yourscript = exec('sh ./download.sh ' + list[item],
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

 

}







