#!/bin/bash

yarn build-client
yarn build-server

mkdir -p app/client
mkdir -p app/server

mv build/* app/client
mv build-server/* app/server