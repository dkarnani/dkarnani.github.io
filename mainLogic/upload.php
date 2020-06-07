<?php

    $file = $_FILES['file'];
    $fileName = $_FILES['file']['name'];
    #$fileSize = $_FILES['file']['size'];
    #$fileType = $_FILES['file']['type'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileExt = explode(".", $fileName);
    $fileActualExt = strtolower(end($fileExt));
    $allowed = 'json';
    if ($fileActualExt == $allowed) 
    {
        $fileNameNew = uniqid('', true).".json";
        $fileDestination = 'uploads/'.$fileNameNew;
        move_uploaded_file($fileTmpName, $fileDestination);
        
        $contents = file_get_contents('traditional_input.json');
        $contentsDecoded = json_decode($contents, true);
        $contentsDecoded['scene']['aircraft']['traditional_airplane']['file'] = $fileDestination;
        $contentsDecoded['scene']['atmosphere'] = (object) null;
        $json = json_encode($contentsDecoded);
        $newpath = 'scene_'.$fileNameNew;
        $newdestination = 'uploads/'.$newpath;
        file_put_contents($newdestination, $json);
        
        $request = 'python3 /var/www/html/uploads/traditional_example.py /var/www/html/uploads/'.$newpath;
        $response = shell_exec($request);
        unlink($fileDestination);
        unlink($newdestination);
        $rest = substr($response, 2, -2);
        $arr = explode(', ', $rest);
        echo json_encode($arr);
    } 
    else 
    {
        echo 1;
    }

?>
