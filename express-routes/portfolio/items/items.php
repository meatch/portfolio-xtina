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
        if ($value['showHide'] === 'show') {

            $link = ($value['archived'] === "1") ? "https://archives.mitchellgohman.com/{$value['domain']}" : "https://{$value['domain']}";

            $item = (Object)[
                'id' => $value['id'],
                'showHide' => $value['showHide'],
                'sortOrder' => $sortOrder,
                'title' => $value['title'],
                'description' => $value['description'],
                'tools' => $value['tools'],
                'image' => "/assets/img/portfolio-assets/{$value['image']}",
                'images' => "/assets/img/portfolio-assets/{$value['images']}",
                'link' => $link,
            ];
            $items[] = $item;
            $sortOrder++;
        }
    }

    // Convert to JSON
    $itemsJSON = json_encode($items);

    // Show in console.
    echoLog($itemsJSON);

    // Write to file for Express consumption
    file_put_contents('./items.json', $itemsJSON );

}

// include('./shared/footer.php');