----

1. Jenkins URL and username and password
       
	 Jenkins URL:http://82.221.49.170:8080/
	 User Name: Gannes
	 Password:  

2. Game Url (AWS)
	
	 Game Url (AWS):http://54.213.255.232/

## Scripts

        DockerBash.sh: Buildar verkefnið á Commitstage
        
        migrateScript.sh:   
  
        CleanBash.sh: Clean-ar images og containera
        
        deploymentScript.sh: scp af docker-compose.yaml og .env skránnum
        og gefur AWS aðgang að þeim og ssh to AWS

## Testing & logic

Outline what tests you created.

Testin sem ég gerði eru:

	- Create game command
	- should emit game created event
	- Join game command
	- should emit game joined event
	- should emit FullGameJoinAttempted when game full
	- Place move command
	- should emit MovePlaced on first game move

## Jenkins

Do you have the following Jobs and what happens in each Job:

	- Commit Stage: Jenkins fer eftir skipunum í DockerBashscriptunni og
          keyrir kóðann, gefur síðan feedback hvort þetta hafi gengið upp
	  eða ekki. Ef það gekk upp, þá tekur Deployment við og gefur út
	  á AWS ef það keyrir villulaus.  

Did you use any of the following features in Jenkins?

	- Schedule or commit hooks

	- Pipeline

	- Jenkins file

## Other

Anything else you did to improve you deployment pipeline of the project itself?

Nei því miður. Ég hefði alveg verið til í að gera miklu meira. Ég sat
föst á degi 2 í ca. viku sem gerði það að verkum að ég náði ekki að komast lengra
en raun ber vitni. Ég mætti samt á hverjum einasta degi og gerði mitt allra,
allra besta. 

 












 

 
