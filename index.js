

const util = require('util');
const exec = require('child_process').exec;
var fs = require('fs');

var hyphen_flag =false;

if (  fs.existsSync('final/final' + process.argv[2] + '.txt' ) ) {

	console.log(process.argv[2] + 'already exists');
        process.exit();



}

 
   exec('sh api.sh ' + process.argv[2] ,(error, stdout, stderr) => {
	
   console.log(`${stdout}`);
   console.log(`${stderr}`);
  
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }

		 else if(error === null) { 

                  console.log('got the json of youtube get api');
                  var parsedJSON = require('./result.json');

		var list=[];

//console.log(parsedJSON['items']);

console.log(process.argv[2]);



if (process.argv[2].indexOf('-') > -1) {

hyphen_flag=true;
console.log('concept has -');


}

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



//const exec = require('child_process').exec;

var temp=0;

for ( item in list) {
 
 // console.log(list[item]);
 
  
 


var yourscript = exec('sh ./download.sh ' + list[item] + ' ' + item,
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
  
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
            
            else if(error === null) {
              temp=temp+1;  

              if ( temp === list.length) {    // run code after loop terminates

    exec('sh ./after_download.sh ' + process.argv[2] + ' ' + hyphen_flag  ,
        (error, stdout, stderr) => { console.log(`${stdout}`);
            console.log(`${stderr}`); }  );
   }
            
                }

            
        });

 

}


 }


});
 
















