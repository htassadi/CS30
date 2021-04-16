<?php
  if (isset($_GET["id"])) {
    echo $_GET["id"];
  }

?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sandbox</title>
</head>

<body>
  <h1>PHP Sandbox</h1>
  <table>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr data-id="1">
      <td data-prop="fname">Jill</td>
      <td data-prop="lname">Smith</td>
      <td data-prop="age">50</td>
    </tr>
    <tr data-id="2">
      <td data-prop="fname">Eve</td>
      <td data-prop="lname">Jackson</td>
      <td data-prop="age">94</td>
    </tr>
  </table>

  <!-- Load JavaScript -->
  <script src="main.js"></script>
</body>

</html>