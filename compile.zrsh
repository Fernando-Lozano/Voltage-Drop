#! /usr/bin/bash

# remove html
file=./index.html
if [ -e "$file" ]; then
    rm $file
fi 
# compile html
npx ejs ./templates/index.ejs -o ./index.html