#!/bin/bash

#echo '$1 = ' $1

title=$(youtube-dl --get-title $1)

cd downloads

youtube-dl --write-auto-sub --sub-lang en --skip-download  --output "%(title)s.%(ext)s" $1

#ffmpeg -i "${title}.srt" "${title}.vtt"

#sed -r '/^[0-9]+$/{N;d}' "${title}.srt" > "${title}.txt"

#sed 's/^ *//; s/ *$//; /^$/d; /^\s*$/d' "${title}.txt" > "${title}_final.txt"

#rm "${title}.txt"




