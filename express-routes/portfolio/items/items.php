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

        $asset_folder = $value['asset_folder'];
        $pdfs = (!empty($value['pdfs'])) ? explode(',',str_replace(' ', '', $value['pdfs'])) : [];

        /*---------------------------
        | Grab Right Column Images
        ---------------------------*/
        $column_footer_images = [];
        $allColumnFooterImages = scandir("../../../public/assets/img/portfolio/{$asset_folder}/column-footer/");

        foreach($allColumnFooterImages as $file) {
            if (strpos($file, '.jpg') !== false || strpos($file, '.gif') !== false || strpos($file, '.png') !== false || strpos($file, '.svg') !== false)  {
                $column_footer_images[] = "/assets/img/portfolio/{$asset_folder}/column-footer/" . $file;
            }
        }
        
        /*---------------------------
        | Grab Sub Profile Images if they exist
        ---------------------------*/
        $sub_images = [];
        $subfolderAllFiles = scandir("../../../public/assets/img/portfolio/{$asset_folder}/sub/");
        foreach($subfolderAllFiles as $file) {
            if (strpos($file, '.jpg') !== false || strpos($file, '.gif') !== false || strpos($file, '.png') !== false || strpos($file, '.svg') !== false)  {
                $sub_images[] = "/assets/img/portfolio/{$asset_folder}/sub/" . $file;
            }
        }

        /*---------------------------
        | Build Data Shape
        ---------------------------*/
        $item = (Object)[
            'id' => $value['id'],
            'sortOrder' => $sortOrder,
            'title' => $value['title'],
            'subtitle' => $value['subtitle'],
            'showcased' => $value['showcased'],
            'media' => $value['media'],
            'application' => $value['application'],
            'development' => $value['development'],
            'highlights' => $value['highlights'],
            'asset_folder' => $asset_folder,
            'link' => $value['link'],
            'pdfs' => $pdfs,
            'images' => (Object)[
                'hero' => "/assets/img/portfolio/{$asset_folder}/hero.jpg",
                'column_footer' => $column_footer_images,
                'sub' => $sub_images,
            ],

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