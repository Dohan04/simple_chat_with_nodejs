
const lineReader = require('line-reader');

lineReader.eachLine('helloworld.txt', function(line) {
    username = line.split(" ")
    console.log(username[0])

});