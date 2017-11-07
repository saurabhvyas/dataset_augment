#!/bin/bash

echo "$1"

wget -O result.json  --header=Content-Type:application/json "https://www.googleapis.com/youtube/v3/search?q="{$1}algorithms"&part=snippet&&maxResults=49&type=video&key=AIzaSyA0lKKbxXaOTZTuAkRLX6yThGFmLhqylI8"
