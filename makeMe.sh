#!/bin/bash

# default package manager
package_manager="sudo apt-get"

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
fi

# Install git
$($package_manager install git)
$($package_manager install npm)

sudo npm install -g karma
sudo npm install -g karma-mocha
sudo npm install -g karma-chai
sudo npm install -g mocha
sudo npm install -g chai
