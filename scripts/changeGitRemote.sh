#!/bin/bash

if [ "$NODE_ENV" == "production" ];
  then
    exit 0
fi

echo -e "\x1b[32mThe actual git remote is:\x1b[0m"
git remote -v
echo -e "\x1b[32mProvide a new remote or press ctrl+c to cancel?\x1b[0m"
read remote
git remote set-url origin $remote
echo -e "Your new remote is \x1b[32m$remote\x1b[0m"
git remote -v