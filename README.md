#Symposia Skeleton Application

A skeleton symposia application, a good starting point to create a front end app using symposia.

##Usage

Download a release and use that as a starting point for your project.

##Requirements

The following requirements exist for this project:

* nodejs - The npm command is needed
* grunt-cli - You need to ensure grunt is installed globally
* bower - Bower needs to be installed globally

The following commands will get this set up for you

####Mac OSX

    brew install nodejs
    npm install -g grunt-cli
    npm install -g bower

####Linux (Debian / Ubuntu)

    sudo apt-get install nodejs
    sudo npm install -g grunt-cli
    sudo npm install -g bower
    
##Setup

Once you have your release there are a few options. To install with the basic setup just run the following commands from the project root directory.

You will first need to install the node modules needed to build the application

    npm install

Then you will need to install the vendor libraries needed for your application

    bower install
    
Once this has completed you can test your application by running the following

    grunt

This will kick off a number of tasks resulting in a finished project directory with minified javascript files that have (hopefully) passed all required tests.