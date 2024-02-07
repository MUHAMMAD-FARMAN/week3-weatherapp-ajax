<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$apiKey = 'b3e57b5ca62c4ac19cd72340230612';
$cityName = $_GET['cityName'];

$apiUrl = "http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}";

// Use cURL to make the request
$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
