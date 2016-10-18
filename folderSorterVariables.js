
var mkdir = require('mkdirp');

module.exports = {
	source: "",
	writeFilesTo: "",
	writeFilesFrom: "",
	// Make directory
	makeDir: function(writeTo, folderName, file){
		mkdir(writeTo+folderName, function(err) { 
	   		  // Create a write stream 
			    var destFile = fs.createWriteStream(writeTo + folderName + '/' + file);

			    // Write the file to the destination listed above ^ 
			    source.pipe(destFile);
			    console.log("Dir added");
		});
	}
};