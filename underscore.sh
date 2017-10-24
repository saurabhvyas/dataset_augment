#!/bin/bash

# converts input (concepts.txt) to output (concepts_underscore.txt) , replacing spaces by _

sed -e 's/^[ \t]*//' -e 's/[ \t]*$//' concepts.txt > conceptsv2.txt
tr ' ' '_' <conceptsv2.txt >concepts_underscore.txt
rm conceptsv2.txt
