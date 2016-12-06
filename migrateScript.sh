#!/bin/bash

set -e
echo "SLEEP"
sleep 10
npm run migratedb-prod
node run.js

exit 0 
