#!/bin/bash

ssh -i "TicTacKey.pem" ec2-user@ec2-54-213-255-232.us-west-2.compute.amazonaws.com


scp -o StrictHostKeyChecking=no -i "TicTacKey.pem" ./docker-compose.yaml ec2-user@ec2-54-213-255-232.us-west-2.compute.amazonaws.com
:~/docker-compose.yaml


scp -o StrictHostKeyChecking=no -i "TicTacKey.pem" ./docker-compose-and-run.sh ec2-user@ec2-user@ec2-54-213-255-232.us-west-2.compute.amazonaws.com
:~/docker-compose-and-run.sh
