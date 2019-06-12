#!/bin/bash
if tree ; then # TRY
  tree -I 'node_modules|coverage|build|__*|public' > structure.md
else # CATCH
    echo -e "\x1b[91mtree command is not installed, try to run \"brew install tree\"\x1b[0m"
fi