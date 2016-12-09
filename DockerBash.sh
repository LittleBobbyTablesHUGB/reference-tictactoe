!/bin/bash

echo Cleaning... 
rm -rf ./build #deletes latest build
cd client
npm install 
cd ..
npm install
#Tags the image in docker with the same tag as in Git
if [ -z "$GIT_COMMIT" ]; then
  export GIT_COMMIT=$(git rev-parse HEAD)
  export GIT_URL=$(git config --get remote.origin.url)
fi

# Remove .git from url in order to get https link to repo (assumes https url for GitHub)
export GITHUB_URL=$(echo $GIT_URL | rev | cut -c 5- | rev)


echo Building app
npm run build
#npm run start
#Echo/Writes  when npm build failes
rc=$?
if [[ $rc != 0 ]] ; then
    echo "Npm build failed with exit code " $rc
    exit $rc
fi

#Githash copied to txt file

cat > ./build/githash.txt <<_EOF_
$GIT_COMMIT
_EOF_

cat > ./build/.env << _EOF_
GIT_COMMIT=$GIT_COMMIT
_EOF_

#Html file made
cat > ./build/public/version.html << _EOF_
<!doctype html>
<head>
   <title>App version information</title>
</head>
<body>
   <span>Origin:</span> <span>$GITHUB_URL</span>
   <span>Revision:</span> <span>$GIT_COMMIT</span>
   <p>
   <div><a href="$GITHUB_URL/commits/$GIT_COMMIT">History of current version</a></div>
</body>
_EOF_


cp ./Dockerfile ./build/
cp ./migrateScript.sh ./build/
cp ./package.json ./build/
cp ./docker-compose.yaml ./build/
cd build
echo Building docker image

docker build -t fanney13/tictactoe:$GIT_COMMIT .

#Error message if build or push failes
rc=$?
if [[ $rc != 0 ]] ; then
    echo "Docker build failed " $rc
    exit $rc
fi

docker push fanney13/tictactoe:$GIT_COMMIT
rc=$?
if [[ $rc != 0 ]] ; then
    echo "Docker push failed " $rc
    exit $rc
fi



echo "Done" 
