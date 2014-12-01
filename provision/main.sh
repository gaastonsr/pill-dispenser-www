# Update system
apt-get -y update
apt-get -y updgrage

# Install common packages
apt-get install -y git nodejs npm

# Fix node.js bin name
ln -s /usr/bin/nodejs /usr/bin/node

# Install gulp and bower globally
npm install -g gulp bower
