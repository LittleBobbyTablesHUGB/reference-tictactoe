#!/bin/bash
ls ./archive -a
echo 'Copy Docker Compose to AWS'
scp -o StrictHostKeyChecking=no -i "TicTacKey.pem" ./docker-compose.yaml ec2-us$
:~/docker-compose.yaml


scp -o StrictHostKeyChecking=no -i "TicTacKey.pem" ./docker-compose-and-run.sh $
:~/docker-compose-and-run.sh


echo 'Connect to AWS'
ssh -i "TicTacKey.pem" ec2-user@ec2-54-213-255-232.us-west-2.compute.amazonaws.com
