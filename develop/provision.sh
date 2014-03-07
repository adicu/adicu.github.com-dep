#!/bin/bash

# Refresh package list
apt-get -y update

# Install Ruby and app dependencies
apt-get -y install curl
curl -sSL https://get.rvm.io | bash
source /etc/profile.d/rvm.sh
rvm install 2.0.0
rvm use 2.0.0
rvm alias create adicu 2.0.0
gem install bundler
cd /vagrant
bundle install

# Install Node.js and app dependencies
apt-get -y install build-essential
command -v npm > /dev/null
if [ $? -ne 0 ]; then
	mkdir /tmp/nodejs-install
	cd /tmp/nodejs-install
	curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
	./configure
	make install
	curl https://npmjs.org/install.sh | clean=no sh
fi
cd /vagrant
sudo npm install

#Install supervisor to make sure grunt and jekyll are running
apt-get -y install supervisor
cp /vagrant/develop/grunt.conf /etc/supervisor/conf.d
cp /vagrant/develop/jekyll.conf /etc/supervisor/conf.d
rm -f /etc/init.d/supervisor
cp /vagrant/develop/supervisord.conf /etc/init/supervisord.conf
stop supervisord
sleep 3
start supervisord
