# scripts_for_mysql

Shell scripts to handle MySQL by cli.


## Pre-requisite

You must change **password validataion policy** to **LOW** before using these scripts:

- Login with mysql cli as root.

  - `$ mysql -u root -p`

- Check your current password validation policy:

  - `> show variables like 'validate_password%';`

- Change your password validation policy:

  - `> set global validate_password.policy=LOW;`

- Logout:

  - `> quit`


## How to use

### create_db.sh

- `$ MYSQL_ROOT_PASSWORD=xxxxx ./create_db.sh`


### drop.sh

- `$ MYSQL_ROOT_PASSWORD=xxxxx ./drop_db.sh [dbname]`


## Reference

https://stackoverflow.com/questions/33470753/create-mysql-database-and-user-in-bash-script

https://qiita.com/keisukeYamagishi/items/d897e5c52fe9fd8d9273


## Copyright

2021 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.

