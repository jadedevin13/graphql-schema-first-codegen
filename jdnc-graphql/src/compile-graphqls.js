import readfiles from 'node-readfiles';
import path from 'path';
import process from 'process';
import fs from 'fs';

let schema;
let graphQLContents = "";

schema = readfiles(process.cwd(), {
  filter: '**.graphqls'
}, function (err, filename, content) {
  if (err) throw err;
  // console.log('File ' + filename + ':');
  // console.log(content);
  graphQLContents += `\n${content}`;
}).then(function (files) {
  // console.log('Read ' + files.length + ' file(s)');

  fs.writeFile(`${process.cwd()}/src/compiled.graphqls`, graphQLContents, function(err) {
    if(err) {
        return console.log(err);
    }
  });

  console.log(graphQLContents);
});
