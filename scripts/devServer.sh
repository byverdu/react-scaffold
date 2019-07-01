#!/bin/bash

# delete old build client files
rm -rf server/client

npm run build-client

# start server in dev-mode
ts-node-dev --inspect --respawn --transpileOnly ./server