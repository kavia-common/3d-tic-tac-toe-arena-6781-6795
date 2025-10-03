#!/bin/bash
cd /tmp/kavia/workspace/code-generation/3d-tic-tac-toe-arena-6781-6795/frontend_react_js
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

