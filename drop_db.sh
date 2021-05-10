#!/bin/bash

if [ $# -gt 0 ] ; then
  USER="$1"

  # drop database and user
  mysql -uroot -p${MYSQL_ROOT_PASSWORD} -e "DROP DATABASE ${USER}"
  mysql -uroot -p${MYSQL_ROOT_PASSWORD} -e "DROP USER ${USER}@localhost"

  echo "DB & USER: '${USER}' DROPPED."
else
  echo "$0 [dbname]"
fi



