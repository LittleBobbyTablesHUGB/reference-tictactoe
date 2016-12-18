----

1. Jenkins URL and username and password

	- Jenkins URL:http://82.221.49.170:8080/
	- User Name: Gannes
	- Password: gannes16  

2. Game Url (AWS)

	- Game Url (AWS):http://54.213.255.232/

## Scripts

        - DockerBash.sh: Buildar verkefnið á Commitstage

        - migrateScript.sh:Stoppar ef failar, hvílir í 10 sek á meðna Dokcerfile er að keyra. Keyrir gagnagrunninn upp.    

        - CleanBash.sh: Clean-ar images og containera

        - deploymentScript.sh: scp af docker-compose.yaml og .env skránnum
        og gefur AWS aðgang að þeim og ssh to AWS

## Testing & logic

Testin sem ég gerði voru:

	- Create game command
	- should emit game created event
	- Join game command
	- should emit game joined event
	- should emit FullGameJoinAttempted when game full
	- Place move command
	- should emit MovePlaced on first game move
  - Not your move
  - Allt í einu vildu testin ekki keyrast í gegn eftir að hafa virkað fínt. Reyndi
  "allt" til að finna villuna en allt kom fyrir ekki. 

## Jenkins

Do you have the following Jobs and what happens in each Job:

	- Commit Stage:Jenkins fer eftir skipunum í DockerBashscriptunni og
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
