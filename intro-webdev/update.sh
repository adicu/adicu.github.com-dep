#!/bin/bash

git clone https://github.com/adicu/devfest-webdev.git tmp
cd tmp

# replace "](img/" with "](/img/intro-webdev/"
sed -i -e 's/\](img\//\](\/img\/intro-webdev\//g' webdev_python_curriculum.md
sed -i -e 's/\](img\//\](\/img\/intro-webdev\//g' webdev_curriculum.md

./build.sh

# change the titles of the HTML documents
sed -i -e 's/webdev_python_curriculum.md/An Introduction to Python Programming/g' webdev_python_curriculum.html
sed -i -e 's/webdev_curriculum.md/An Accelerated Introduction to Web Development/g' webdev_curriculum.html

mv webdev_curriculum.html ../index.html
mkdir ../python
mv webdev_python_curriculum.html ../python/index.html
cd ..
rm -rf tmp