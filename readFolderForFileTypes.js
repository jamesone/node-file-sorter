var mime = require('mime');
var mimeTypes = require('mime/types.json');
var paths = require('path')
var fileExtensions = new Array(".c", ".m", ".7z", ".ai", ".cs", ".db", ".gz", ".js", ".pl", ".ps", ".py", ".rm", ".ra", ".3dm", ".3g2", ".3gp", ".8bi", ".aif", ".app", ".asf", ".asx", ".avi", ".bak", ".bat", ".bin", ".bmp", ".cab", ".cer", ".cfg", ".cgi", ".com", ".cpl", ".cpp", ".dbf", ".dbx", ".deb", ".dll", ".dmg", ".dmp", ".doc", ".csr", ".css", ".csv", ".cur", ".dat", ".drv", ".drw", ".dtd", ".dwg", ".dxf", ".efx", ".eps", ".exe", ".fla", ".flv", ".fnt", ".fon", ".gam", ".gho", ".gif", ".gpx", ".hqx", ".iff", ".ini", ".iso", ".jar", ".jpg", ".m3u", ".m4a", ".max", ".mdb", ".mid", ".mim", ".mov", ".mp3", ".mp4", ".mpa", ".mpg", ".msg", ".msi", ".nes", ".ori", ".otf", ".jsp", ".key", ".kml", ".lnk", ".log", ".pct", ".pdb", ".pdf", ".pif", ".pkg", ".png", ".pps", ".ppt", ".prf", ".psd", ".qxd", ".qxp", ".rar", ".rels", ".rom", ".rpm", ".rss", ".rtf", ".sav", ".sdf", ".sit", ".sql", ".svg", ".swf", ".sys", ".thm", ".tif", ".tmp", ".ttf", ".txt", ".uue", ".vb", ".vcd", ".vcf", ".vob", ".wav", ".wks", ".wma", ".wmv", ".wpd", ".wps", ".wsf", ".xll", ".xls", ".xml", ".yuv", ".zip", ".docx", ".indd", ".java", ".part", ".pptx", ".sitx", ".zipx", ".xlsx", ".pages", ".accdb", ".class", ".toast", ".plugin", ".gadget", ".tar.gz", ".torrent", ".keychain", ".pspimage", ".json", ".html", ".php", ".xml", ".apk", ".zip");
var fs = require('fs');
var mkdir = require('mkdirp');
var fileVariables = require('./folderSorterVariables');

fileVariables.writeFilesTo = 'files/';
fileVariables.writeFilesFrom = 'testFolder';

// General function
var dive = function(dir, action) {
    // Assert that it's a function
    if (typeof action !== "function")
        action = function(error, file) {};

    // Read the directory and grabs list of files
    fs.readdir(dir, function(err, list) {
        // Return the error if something went wrong | dir doesn't exist maybe
        if (err) {
            console.log(err, " ERROR");
            throw err;
            return;
        }

        // Loop through file in list
        list.forEach(function(file) {
            // console.log(mime.lookup(dir + "/" + file));

            // Full path of that file
            path = dir + "/" + file;

            // Create a read stream for the file (essentially copy it)
            source = fs.createReadStream(path);
   //          source.on('end', function() {
   //  				console.log(data);
			// });
            // Sort and copy files into respective folder
            sortFilesIntoFolders(file, dir);


        });
    });

};

// Writes files to specified folder name, make array of file types and then loop through it and make directory if not exists and transfer file
function sortFilesIntoFolders(file, dir) {
    var fileType = mime.lookup(dir + "/" + file);
    var folderName = "";
    var destFile = "";

    for (var i = 0; i < fileExtensions.length; i++) {
        if (paths.extname(file) == fileExtensions[i]) {
            folderName = paths.extname(file).substr(1);

            // If the dir already exists then insert
            if (checkIfDirExists(folderName)) {
                destFile = fs.createWriteStream(fileVariables.writeFilesTo + folderName + '/' + file);
                source.pipe(destFile);
                return;
            }

            // If not exist then make directory
            mkdir(fileVariables.writeFilesTo + folderName, function(err) {
                if (err) {
                    console.log("+______________",err);
                    throw err;
                    return;
                }
                // Create a write stream 
                destFile = fs.createWriteStream(fileVariables.writeFilesTo + folderName + '/' + file);

                // Write the file to the destination listed above ^ 
                source.pipe(destFile);
            });
        }
    }
    source.on('end', function() {
        console.log("Moved");
    });
    source.on('error', function(err) {
        console.log("Error has occured in sortFileFoldes", err);
        return;
    });

}

// if(fileType == "application/json"){

// 	folderName="json";
// 		if(checkIfDirExists(folderName)){
// 			var destFile = fs.createWriteStream(fileVariables.writeFilesTo + folderName +'/'+ file);
// 			source.pipe(destFile);
// 			return;
// 		}

// 		// Make directory
// 		mkdir(fileVariables.writeFilesTo+folderName, function(err) { 
//    		  // Create a write stream 
// 		    var destFile = fs.createWriteStream(fileVariables.writeFilesTo + folderName + '/' + file);

// 		    // Write the file to the destination listed above ^ 
// 		    source.pipe(destFile);
// 	});

// } else if(fileType == "application/pdf"){
// 	folderName="pdf";

// 	// Check if the directory we are about to create already exists (folderName)
// 	if(checkIfDirExists(folderName)){
// 			var destFile = fs.createWriteStream(fileVariables.writeFilesTo + folderName +'/'+ file);
// 			source.pipe(destFile);
// 			return;
// 		}


// On endorerror
// source.on('end', function() {
//     console.log("Moved");
// });
// source.on('error', function(err) { /* error */ });

// }

function checkIfDirExists(foldName) {
	// paths.exist(foldName, function(exists) { 
	//   if (exists) { 
	//     return true;
	//   }  else
	//   	return false;
	// }); 
    try {
        // Query the entry
        stats = fs.lstat(fileVariables.writeFilesTo + foldName);

        // Is it a directory?
        if (stats.isDirectory()) {
            return true;
        }
    } catch (e) {
        return false;
    }
}



dive(fileVariables.writeFilesFrom);