#!/bin/bash
echo -e "\x1b[32mThe actual git remote is:\x1b[0m"
git remote -v
echo -e "\x1b[32mDo you want to change it?\x1b[0m"
echo -e "\x1b[32mSelect an option and press Enter\x1b[0m"

options=("Yes" "No" "Quit")

select opt in "${options[@]}"
do
    case $opt in
        "Yes")
            echo -e "\x1b[32mType your new git remote\x1b[0m"
            read remote
            git remote set-url origin $remote
            echo -e "Your new remote is \x1b[32m$remote\x1b[0m"
            break
            ;;
        "No")
            echo -e "\x1b[91mYou chose No\x1b[0m"
            break
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
