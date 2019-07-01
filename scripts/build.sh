#!/bin/bash

# delete old build
rm -rf app/
rm -rf server/client
rm -rf build-server

# ui and server build
yarn build-client
yarn build-server

mkdir -p app

cp -R build-server/* app/