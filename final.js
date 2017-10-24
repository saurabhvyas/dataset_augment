var exec = require('child_process').execSync;

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('concepts_underscore.txt')
});

lineReader.on('line', function (line) {

	 exec('node index.js ' + line , function(err, stdout) {
        console.log(stdout); 

      if(err) { console.log(err) }
  
});

})
