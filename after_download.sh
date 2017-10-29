#!/bin/bash

cd downloads

cat * > "final$1.txt"

if [ $2 = true ]; then

temp=$(echo $1 | tr - ' ')
temp2=$(echo $1 | tr - '_')
#rm! (final.txt)

echo $temp
echo $temp2

sed -i  "s/${temp}/${temp2}/g" "final$1.txt"
#sed -i "s|\${temp}|${temp2}|g" "final$1.txt"

#perl -pi -e "s/$temp/$temp2/g" "final$1.txt"

else

echo "concept has no -"
	
fi





find . \! -name "final$1.txt" -delete
mv "final$1.txt" "../final/final$1.txt"
