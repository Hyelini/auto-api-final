var express = require("express");
var app = express();

app.get("/soil", function (req: any, res: any) {
  const { serviceKey, PNU_Code } =
    req.query;

  var api_url =
    "http://apis.data.go.kr/1390802/SoilEnviron/SoilCharac/V2/getSoilCharacter?";  
  var request = require("request");
  var options = {
    url: api_url,
    qs: { serviceKey, PNU_Code },
  };

  request.get(options, function (error: any, response: any, body: any) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "application/xml;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log(
    "http://127.0.0.1:3000/soil?serviceKey=I4zRCdsn1N3ca9A6glrxOyJPZfbykEHWEwKo5ej01ZzccSqJGty7dskcjEbDAve8r8S%2FzSy3Rjp3LKOXPR%2BPNw%3D%3D&PNU_Code=461704 app listening on port 3000!"
  );
});