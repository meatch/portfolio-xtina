<?php
/*---------------------------
| Notes
    * Sort CSV first for cleanest import
---------------------------*/

/*---------------------------
| Settings
---------------------------*/
$execute = true;
$csv = './items.csv';

/*---------------------------
| Resources
---------------------------*/
require_once('./shared/connect.php');

/*---------------------------
| CSV Stuff
---------------------------*/
$newAssocRecords = convertCSVToAssoc($csv);

// print_r($newAssocRecords);
// die();

/*---------------------------
| Handle Inserting into MySQL
---------------------------*/
if ($execute) {
    
    /* Insert ---------------------------*/
    $items = [];

    $sortOrder = 1;
    foreach($newAssocRecords as $key => $value) {
        $item = (Object)[
            'id' => $value['id'],
            'sortOrder' => $sortOrder,
            'title' => $value['title'],
            'subtitle' => $value['subtitle'],
            'showcased' => $value['showcased'],
            'media' => $value['media'],
            'application' => $value['application'],
            'development' => $value['development'],
            'highlghts' => $value['highlghts'],
            'asset_folder' => $value['asset_folder'],
            'link' => $value['link'],
            'pdfs' => $value['pdfs'],
        ];
        
        $items[] = $item;
        $sortOrder++;
    }

    // Convert to JSON
    $itemsJSON = json_encode($items);

    // Show in console.
    echoLog($itemsJSON);

    // Write to file for Express consumption
    file_put_contents('./items.json', $itemsJSON );

}

// include('./shared/footer.php');