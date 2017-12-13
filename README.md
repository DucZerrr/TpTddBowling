A installer 


sudo npm install -g karma
sudo npm install -g karma-mocha
sudo npm install -g karma-chai
sudo npm install -g mocha
sudo npm install -g chai

Au choix PhantomJS ou Navigateur

sur le fichier karma.conf.js Ajouter :
frameworks: ['mocha','chai'] a la place de frameworks: ['mocha']