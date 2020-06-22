<?php
// $servername = "127.0.0.1:6002";
// $username = "root";
// $password = "123456";
// $database = "lama";

// // Create connection
// $conn = new mysqli($servername, $username, $password, $database);

// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully";

/*---------------------------
| Utilities
---------------------------*/
function emptyCheck($string) {
    global $conn;
    return (!empty($string)) ? "'" . $conn->real_escape_string($string) . "'" : 'NULL';
}

function booleanConversion($value, $eval) {
    return ($value === $eval) ? 1 : 0;

}

function convertCSVToAssoc($csv, $limit=1000000000) {
    $csvFile = fopen($csv,"r");
    // Grab Header Row = pointer moves down
    $headers = fgetcsv($csvFile);
    $newAssocRecords = [];
    $cnt = 1;

    while (($data = fgetcsv($csvFile)) !== FALSE) {

        $record = [];
        foreach($data as $key => $value) {
            $record[ $headers[$key] ] = $value;
        }
        $newAssocRecords[] = $record;

        $cnt++;
        if ($cnt >= $limit) {
            break;
        }
    }

    return $newAssocRecords;
}

function echoLog($message) {
    echo $message . "\n";
}

function artistNameClean($name) {
    $name = trim($name);
    $name = strtolower($name);
    $name = str_replace(' &amp; ',' & ',$name);
    $name = str_replace(' and ',' & ',$name);
    $name = ucwords($name);
    return $name;
}

function artistNameCommaLotAttributes($name) {
    $allowedArr = [
        'f.a.i.a.',
        'designer',
        'publisher',
        'attributed',
        'attritubted',
        'style',
        'style of',
        'after',
        'after a design by',
        'decorator',
    ];
    $lotAttr = false;
    $name = trim(strtolower($name));

    if (strpos($name, ',') !== false) {
        foreach ($allowedArr as $allowed) {
            if (strpos($name, $allowed) !== false) {
                $nameArr = explode(',', $name);
                $name = trim($nameArr[0]);
                $lotAttr = trim($nameArr[1]);
                break; //No need to keep looking
            }
        }
    }

    return [
        'name' => ucwords($name),
        'lotAttr' => ucfirst($lotAttr),
    ];
}
