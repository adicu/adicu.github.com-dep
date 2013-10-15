<?php
session_start();
require_once('twitteroauth.php');

$search = "your twitter username";
$consumerkey = "consumer key";
$consumersecret = "consumer secret";
$accesstoken = "access token";
$accesstokensecret = "access secret";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
   
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
  
$tweets = $connection->get("https://api.twitter.com/1.1/search/tweets.json?q=".$search);
  
echo json_encode($tweets);
?>
