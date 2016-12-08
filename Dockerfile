#Segir til um hvaðan image-ið er að koma
FROM node 
#Mappa sem heldur utan um kóða    
WORKDIR /code
#Kóperar allt inn í buildið
COPY . .
#Node á að keyrast úr þeirri möppu sem ég er í núna
ENV NODE_PATH . 
#Installar dependencies
RUN npm install --silent
EXPOSE 3000
#Vísar í migrateScriptuna
CMD ["./migrateScript.sh"]
