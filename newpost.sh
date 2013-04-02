#!/bin/bash

if [ -z "$2" ]; then
	echo "Usage: $0 title type"
	exit 1
fi

TITLE=$1
TYPE=$2
TEMPLATE="_templates/$TYPE"
POST="_posts/$(date +%Y-%m-%d)-$TITLE.${TYPE##*.}"

cp "$TEMPLATE" "$POST"

echo "Created new post in $POST"
