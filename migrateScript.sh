#!/bin/bash

#Everything stops if fails
set -e
#Stops for 10 sek while Dokcerfile is working
echo "SLEEP"
sleep 10
npm run migratedb-prod
node run.js

exit 0 
