#!/bin/bash

git clone https://github.com/adicu/devfest-webdev.git tmp
cd tmp
./build.sh
mv webdev_curriculum.html ../index.html
mkdir ../python
mv webdev_python_curriculum.html ../python/index.html
cd ..
rm -rf tmp