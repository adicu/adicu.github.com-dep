if [ -n "$1" ]; then
	FNAME="_posts/`date +%Y-%m-%d-$1.markdown`"
	echo '---' > $FNAME
	echo 'title:' >> $FNAME
	echo 'layout: post' >> $FNAME
	echo '---' >> $FNAME
	$EDITOR $FNAME
fi
