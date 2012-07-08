var express = require('express')
  , app = express();

app.use(express["static"](__dirname + "/sandbox"));
app.listen(8000);
console.log("static app running on port 8000");