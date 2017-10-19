#!/bin/bash

cd downloads

cat * > "final$1.txt"

#rm! (final.txt)

find . \! -name "final$1.txt" -delete
mv "final$1.txt" "../final/final$1.txt"
