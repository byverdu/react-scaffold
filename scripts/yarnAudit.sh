# run yarn audit, check the number of lines that have 'high' on
# them in the output table, meaning high|critical vulnerability
if [[ $(yarn audit | grep -E "high | critical" | wc -l | tr -d ' ') -gt 0 ]]; then
  echo "high or critical vulnerability found in your dependencies"
  exit 1
fi