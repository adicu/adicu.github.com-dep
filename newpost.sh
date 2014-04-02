#!/bin/bash

# User input
TYPE=$1
NAME=$2

# Types and Templates supported
TYPES=( "blogpost" "resource" "link" )
TEMPLATES=("_templates/blogpost.md" "_templates/resource.md" "_templates/link.md" )

usage () {
	# Print usage and quit
	SAVE_IFS=$IFS
	IFS="|"
	TYPESJOIN="${TYPES[*]}"
	IFS=$SAVE_IFS
	echo "================================================"
	echo "Usage: $0 $TYPESJOIN <name>"
	echo "	Where '<name>' is all lowercase letters separated by dashes (-)"
	echo "	ie:	$0 blogpost my-really-cool-post"
	echo "================================================"
	exit 1
}

indexOfElement () {
	# Index of TYPE in TYPES or -1 for non-membership

	for (( i = 0; i < ${#TYPES[@]}; i++ )); do
		# echo "${TYPES[$i]}"
   		if [ "${TYPES[$i]}" == "$TYPE" ]; then
			echo $i
			return
		fi
	done
	echo "-1"
}

INDEX=$(indexOfElement)

# If invalid input, print usage and quit
if [[ "$#" -ne 2 || "$INDEX" -eq -1 ]];then
	usage
fi
if ! [[ "$NAME" ~= "([a-z]|-)*" ]]; then
	echo "Invalid name: $NAME"
	usage
fi

TEMPLATE="${TEMPLATES["$INDEX"]}"
POST="_posts/$(date +%Y-%m-%d)-$TITLE.${TEMPLATE##*.}"

# Special case for resource posts, they go to /learn/
if [ "$TYPE" == "resource" ]; then
	POST="learn/_posts/$(date +%Y-%m-%d)-$NAME.${TEMPLATE##*.}"
	cp "$TEMPLATE" "$POST"
	sed -i '' -e "s/^category.*$/&\\`echo -e '\n\r'`permalink: \/learn\/$NAME\//g" "$POST"
else
	cp "$TEMPLATE" "$POST"
fi

echo "Created new $TYPE in $POST"
