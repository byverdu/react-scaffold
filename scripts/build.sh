#!/bin/bash

yarn build-client
yarn build-server

mkdir -p app

mv build-server/* app/