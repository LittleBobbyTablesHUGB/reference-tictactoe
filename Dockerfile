#Tells you where the image is from
FROM node    
WORKDIR /code
#Copies all into build
COPY . .
#Node runs from current folder
ENV NODE_PATH . 
#Installs dependencies
RUN npm install --silent
EXPOSE 3000
#Defiines the command to run
CMD ["./migrateScript.sh"]
