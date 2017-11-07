cd final
cat * > final.txt
sed 's/.*/\L\1/g' < final.txt
