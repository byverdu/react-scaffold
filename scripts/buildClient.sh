#!/bin/bash

npm run build-css
react-app-rewired build
mkdir server/client
cp -R build/* server/client
