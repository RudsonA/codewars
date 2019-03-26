<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Duplicate Encoder</title>
</head>

<body>

    <form action="" method="get">
        <input type="text" name="word" id="" placeholder="string">
        <input type="submit" value="check">
    </form>

    <?php
        $word = $_GET['word'];
        $word = strtolower($word);
        function duplicate_encode($word) {
            $wordArr = str_split($word); 
            foreach ($wordArr as $w) {
                
            }
        }
    ?>

</body>

</html>