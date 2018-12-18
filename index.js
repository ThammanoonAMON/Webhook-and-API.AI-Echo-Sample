"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cheerio = require("cheerio");
const output;

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  request(
    "https://www.sanook.com/horoscope/152061/",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const luck = $(".jsx-2224007166 .jsx-3435773413");
        output = luck
          .find("p")
          .slice(0, 3)
          .text();

        console.log(output);
      }
    }
  );
  var speech = output;
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
