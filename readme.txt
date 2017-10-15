saurabh@saurabh-Inspiron-5559:~/Documents/audio_classification$ youtube-dl --write-auto-sub --sub-lang en --skip-download  https://www.youtube.com/watch?v=NKiwFF_zBu4

( the below will convert, directly to srt , but for some reason isn't working )

saurabh@saurabh-Inspiron-5559:~/Documents/audio_classification$ youtube-dl --write-auto-sub --sub-lang en --skip-download  https://www.youtube.com/watch?v=NKiwFF_zBu4 --convert-subs srt


for subtitle conversion
ffmpeg -i file.srt file.vtt

to convert .srt to .txt
sed -r '/^[0-9]+$/{N;d}' ian.srt > ian.txt

to remove white space and lines from .txt
sed 's/^ *//; s/ *$//; /^$/d; /^\s*$/d' ian.txt > ian_final.txt


key=AIzaSyA0lKKbxXaOTZTuAkRLX6yThGFmLhqylI8




retrieve just videos
https://www.googleapis.com/youtube/v3/search?q=linux&part=snippet&&maxResults=25&type=video&key=AIzaSyA0lKKbxXaOTZTuAkRLX6yThGFmLhqylI8

to send http request from terminal

wget -O result.json  --header=Content-Type:application/json "https://www.googleapis.com/youtube/v3/search?q=linux&part=snippet&&maxResults=25&type=video&key=AIzaSyA0lKKbxXaOTZTuAkRLX6yThGFmLhqylI8"



this will return a list of json , what I need is list of json.items.item.id.videoId
