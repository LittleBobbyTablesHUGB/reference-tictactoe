#!/bin/bash

#Stoppar allt strax, ef villa kemur upp
set -e
#Stoppar í 10 sek á meðan Dokcerfile er að vinna
echo "SLEEP"
sleep 10
npm run migratedb-prod
node run.js

exit 0 
