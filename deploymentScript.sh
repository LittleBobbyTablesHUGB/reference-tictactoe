#!/bin/bash
ls ./archive -a
echo 'Copy Docker Compose to AWS'
scp -o StrictHostKeyChecking=no -i "/var/lib/jenkins/workspace/Deployment/TicTacKey.pem" ./archive/docker-compose.yaml ec2-user@ec2-54-213-255-232.us-west-2.compute.amazonaws.com:~/.

scp -o StrictHostKeyChecking=no -i "/var/lib/jenkins/workspace/Deployment/TicTacKey.pem" ./archive/.env ec2-user@ec2-54-213-255-232.us-west-2.compute.amazonaws.com:~/.

echo 'Connect to AWS'
ssh -i "/var/lib/jenkins/workspace/Deployment/TicTacKey.pem" ec2-user@ec2-54-213-255-232.us-west-2.compute.amazonaws.com
docker-compose up -d
exit
echo 'DONE'
