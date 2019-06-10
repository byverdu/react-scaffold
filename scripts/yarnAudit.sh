#!/bin/bash

# run yarn audit, check the number of lines that have 'high' on
# them in the output table, meaning high|critical vulnerability
if [ "$(yarn audit | grep -c "high | critical" | tr -d ' ')" -gt 0 ]; then
  echo -e "\x1b[91mhigh or critical vulnerability found in your dependencies\x1b[0m"
  exit 1
fi

echo -e "\x1b[32myarn audit found 0 vulnerabilities\x1b[0m"