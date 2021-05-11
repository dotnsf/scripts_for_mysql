#!/bin/bash

# MySQL root Password
#MYSQL_ROOT_PASSWORD=P@ssw0rd

# create random password
PASSWD="$(openssl rand -base64 12)"

# create random user
USER="$(openssl rand -hex 8)"

# create database and user
mysql -uroot -p${MYSQL_ROOT_PASSWORD} -e "CREATE DATABASE ${USER} default character set utf8"
mysql -uroot -p${MYSQL_ROOT_PASSWORD} -e "CREATE USER ${USER}@localhost IDENTIFIED BY '${PASSWD}'"
mysql -uroot -p${MYSQL_ROOT_PASSWORD} -e "GRANT ALL PRIVILEGES ON ${USER}.* TO '${USER}'@'localhost'"

echo "USERNAME = DBNAME = '${USER}'"
echo "PASSWORD = '${PASSWD}'"



