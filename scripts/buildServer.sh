#!/bin/bash

rm -rf build-server

./node_modules/.bin/tsc -p server

cp -R server/client build-server