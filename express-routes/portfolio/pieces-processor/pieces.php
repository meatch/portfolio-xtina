<?php
/*---------------------------
| Notes
    * Sort CSV first for cleanest import
---------------------------*/

/*---------------------------
| Settings
---------------------------*/
$execute = true;
$csv = './pieces.csv';

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
    foreach($newAssocRecords as $key => $value) {

        if ($value['showHide'] === 'show') {
            $objectString = '{ ';

                $objectString .= "id: {$value['id']}, ";
                // $objectString .= "showHide: '{$value['showHide']}', ";
                // $objectString .= "sortOrder: '{$value['sortOrder']}', ";

                $objectString .= "categories: [{$value['categories']}], ";

                // Meta
                $objectString .= "title: '{$value['title']}', ";
                $objectString .= "description: '{$value['description']}', ";

                // Image URL
                $objectString .= "image: '/assets/img/portfolio-assets/{$value['image']}', ";

                // Website URL
                $link = ($value['archived'] === "1") ? "https://archives.mitchellgohman.com/{$value['domain']}" : "https://{$value['domain']}";
                $objectString .= "link: '{$link}' ";
            
            $objectString .= '},';
            echoLog($objectString);
        }
    }
}

// include('./shared/footer.php');