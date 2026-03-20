#!/bin/bash
echo 'const args = process.argv.slice(2);

console.log(args);
' > $1


cat $1
