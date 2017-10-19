#!/bin/bash

cd downloads

cat * > final.txt

#rm! (final.txt)

find . \! -name 'final.txt' -delete
