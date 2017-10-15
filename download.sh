#!/bin/bash

#echo '$1 = ' $1
cd downloads
youtube-dl --write-auto-sub --sub-lang en --skip-download $1


