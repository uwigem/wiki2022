#!/bin/bash

# PREREQUISITES: 
# 	Install the iGEM-CLI globally: `npm install -g igem-cli`
#	Set the environment variables inside .bashrc:
#		export IGEM_USERNAME=username
#		export IGEM_PASSWORD=password
#		export IGEM_TEAM=Washington
#		export IGEM_YEAR=2019
#	Requires version: 1.0.2
#
# To run this file, go to the home directory of the repo and run `./scripts/deploy.sh`

npm run build
igem-cli -t JavaScript ./build/static/js/main.js
igem-cli -t CSS ./build/static/css/main.css