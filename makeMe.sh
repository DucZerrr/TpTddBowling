#!/bin/bash

# default package manager

# test if it's a mac
if [[ $(uname -a | grep Mac) ]]; then
  # test if brew exist
  brew=$(which brew)
  echo "You have a mac you rich person";
  package_manager="brew"
  # install brew
  if [[ -z $brew ]]; then
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  fi

  brew install git
  brew install npm
  brew install sl

else
  sudo apt-get update
  sudo apt-get -y install git
  sudo apt-get -y install nodejs
  curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
  sudo bash nodesource_setup.sh
  sudo apt-get -y install nodejs
  sudo apt-get -y install build-essential
  sudo apt-get install sl
fi


sudo npm install -g karma
sudo npm install -g karma-mocha
sudo npm install -g karma-chai
sudo npm install -g mocha
sudo npm install -g chai
sl
