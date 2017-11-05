#!/bin/bash

echo "$1"

wget -O result.json  --header=Content-Type:application/json "https://www.googleapis.com/youtube/v3/search?q="{$1}computer_science"&part=snippet&&maxResults=25&type=video&key=AIzaSyA0lKKbxXaOTZTuAkRLX6yThGFmLhqylI8"
