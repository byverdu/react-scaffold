#!/bin/bash

# delete old build
rm -rf app/
rm -rf server/client

# ui and server build
yarn build-client
yarn build-server

mkdir -p app

mv build-server/* app/