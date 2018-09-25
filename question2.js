'use strict';

const fs = require('fs');

let student ;
module.exports.fileName ='stadfasudent.json';
module.exports.nodeValueToChange = 'Ali Akbar';
module.exports.newJsonFileName = 'modifiedStudent.json';
module.exports.result = '';

exports.modifyXMLData = function(callback) {
    fs.readFile(module.exports.fileName, (err, data) => {  
        if (err)  
            module.exports.result = 'false';
            callback(false); 
        student = JSON.parse(data);
        student.name = module.exports.nodeValueToChange ;
        console.log('reading file '+module.exports.fileName);  
        let data1 = JSON.stringify(student, null, 2);  
        fs.writeFile(module.exports.newJsonFileName, data1, (err) => {  
            if (err) 
                module.exports.result = 'false';
                callback(false);
            console.log('Data written to file');
            console.log('This is after the write call');  

        });
        module.exports.result = 'true';
    callback(true);
    });
    
}

exports.modifyXMLData(function (result) {
    console.log(result);
});