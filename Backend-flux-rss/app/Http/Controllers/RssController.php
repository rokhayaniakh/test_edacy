<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;


class RssController extends Controller
{
    public function rss() {
 
            $url = "https://www.lemonde.fr/rss/en_continu.xml";
            $fileContents= file_get_contents($url);
            $fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);
            $fileContents = trim(str_replace('"', "'", $fileContents));
            $simpleXml = simplexml_load_string($fileContents);
            $json = json_encode($simpleXml);
             return response()->json(["success" => true, "data" => $json]);
}


}
