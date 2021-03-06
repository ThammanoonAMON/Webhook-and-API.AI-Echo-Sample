"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cheerio = require("cheerio");
var output1;
var output2;
var output3;
var output4;
var output5;
var output6;
var output7;
var output8;
var result;
var result1;
var result2;
var result3;
var result4;
var result5;
var result6;
var result7;
var noResult = "ขอโทษค่ะ ฉันไม่เข้าใจค่ะ";
var monday = "https://www.sanook.com/horoscope/152501/";
var tuesday = "https://www.sanook.com/horoscope/152505/";
var wednesday = "https://www.sanook.com/horoscope/152509/";
var thursday = "https://www.sanook.com/horoscope/152513/";
var friday = "https://www.sanook.com/horoscope/152517/";
var saturday = "https://www.sanook.com/horoscope/152521/";
var sunday = "https://www.sanook.com/horoscope/152525/";
var temp;

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);
restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  temp = req.body.queryResult.parameters.echoText;

  request(monday, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const luck = $(".jsx-2224007166 .jsx-3435773413");
      output1 = luck
        .find("p")
        .slice(0, 1)
        .text();

      output2 = luck
        .find("p")
        .slice(1, 2)
        .text();

      output3 = luck
        .find("p")
        .slice(2, 3)
        .text();

      output4 = luck
        .find("p")
        .slice(3, 4)
        .text();

      output5 = luck
        .find("p")
        .slice(4, 5)
        .text();

      output6 = luck
        .find("p")
        .slice(5, 6)
        .text();

      output7 = luck
        .find("p")
        .slice(6, 7)
        .text();

      output8 = luck
        .find("p")
        .slice(7, 8)
        .text();

      result1 =
        "ดวงคนเกิดวันจัทร์ วันนี้ :" +
        "\n" +
        "\n" +
        output1 +
        "\n" +
        "\n" +
        output2 +
        "\n" +
        "\n" +
        output3 +
        "\n" +
        "\n" +
        output4 +
        "\n" +
        "\n" +
        output5 +
        "\n" +
        "\n" +
        output6 +
        "\n" +
        "\n" +
        output7 +
        "\n" +
        "\n" +
        output8;
    }
  });
  request(tuesday, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const luck = $(".jsx-2224007166 .jsx-3435773413");
      output1 = luck
        .find("p")
        .slice(0, 1)
        .text();

      output2 = luck
        .find("p")
        .slice(1, 2)
        .text();

      output3 = luck
        .find("p")
        .slice(2, 3)
        .text();

      output4 = luck
        .find("p")
        .slice(3, 4)
        .text();

      output5 = luck
        .find("p")
        .slice(4, 5)
        .text();

      output6 = luck
        .find("p")
        .slice(5, 6)
        .text();

      output7 = luck
        .find("p")
        .slice(6, 7)
        .text();

      output8 = luck
        .find("p")
        .slice(7, 8)
        .text();

      result2 =
        "ดวงคนเกิดวันอังคาร วันนี้ :" +
        "\n" +
        "\n" +
        output1 +
        "\n" +
        "\n" +
        output2 +
        "\n" +
        "\n" +
        output3 +
        "\n" +
        "\n" +
        output4 +
        "\n" +
        "\n" +
        output5 +
        "\n" +
        "\n" +
        output6 +
        "\n" +
        "\n" +
        output7 +
        "\n" +
        "\n" +
        output8;
    }
  });
  request(wednesday, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const luck = $(".jsx-2224007166 .jsx-3435773413");
      output1 = luck
        .find("p")
        .slice(0, 1)
        .text();

      output2 = luck
        .find("p")
        .slice(1, 2)
        .text();

      output3 = luck
        .find("p")
        .slice(2, 3)
        .text();

      output4 = luck
        .find("p")
        .slice(3, 4)
        .text();

      output5 = luck
        .find("p")
        .slice(4, 5)
        .text();

      output6 = luck
        .find("p")
        .slice(5, 6)
        .text();

      output7 = luck
        .find("p")
        .slice(6, 7)
        .text();

      output8 = luck
        .find("p")
        .slice(7, 8)
        .text();

      result3 =
        "ดวงคนเกิดวันพุธ วันนี้ :" +
        "\n" +
        "\n" +
        output1 +
        "\n" +
        "\n" +
        output2 +
        "\n" +
        "\n" +
        output3 +
        "\n" +
        "\n" +
        output4 +
        "\n" +
        "\n" +
        output5 +
        "\n" +
        "\n" +
        output6 +
        "\n" +
        "\n" +
        output7 +
        "\n" +
        "\n" +
        output8;
    }
  });
  request(thursday, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const luck = $(".jsx-2224007166 .jsx-3435773413");
      output1 = luck
        .find("p")
        .slice(0, 1)
        .text();

      output2 = luck
        .find("p")
        .slice(1, 2)
        .text();

      output3 = luck
        .find("p")
        .slice(2, 3)
        .text();

      output4 = luck
        .find("p")
        .slice(3, 4)
        .text();

      output5 = luck
        .find("p")
        .slice(4, 5)
        .text();

      output6 = luck
        .find("p")
        .slice(5, 6)
        .text();

      output7 = luck
        .find("p")
        .slice(6, 7)
        .text();

      output8 = luck
        .find("p")
        .slice(7, 8)
        .text();

      result4 =
        "ดวงคนเกิดวันพฤหัสบดี วันนี้ :" +
        "\n" +
        "\n" +
        output1 +
        "\n" +
        "\n" +
        output2 +
        "\n" +
        "\n" +
        output3 +
        "\n" +
        "\n" +
        output4 +
        "\n" +
        "\n" +
        output5 +
        "\n" +
        "\n" +
        output6 +
        "\n" +
        "\n" +
        output7 +
        "\n" +
        "\n" +
        output8;
    }
  });
  request(friday, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const luck = $(".jsx-2224007166 .jsx-3435773413");
      output1 = luck
        .find("p")
        .slice(0, 1)
        .text();

      output2 = luck
        .find("p")
        .slice(1, 2)
        .text();

      output3 = luck
        .find("p")
        .slice(2, 3)
        .text();

      output4 = luck
        .find("p")
        .slice(3, 4)
        .text();

      output5 = luck
        .find("p")
        .slice(4, 5)
        .text();

      output6 = luck
        .find("p")
        .slice(5, 6)
        .text();

      output7 = luck
        .find("p")
        .slice(6, 7)
        .text();

      output8 = luck
        .find("p")
        .slice(7, 8)
        .text();

      result5 =
        "ดวงคนเกิดวันศุกร์ วันนี้ :" +
        "\n" +
        "\n" +
        output1 +
        "\n" +
        "\n" +
        output2 +
        "\n" +
        "\n" +
        output3 +
        "\n" +
        "\n" +
        output4 +
        "\n" +
        "\n" +
        output5 +
        "\n" +
        "\n" +
        output6 +
        "\n" +
        "\n" +
        output7 +
        "\n" +
        "\n" +
        output8;
    }
  });
  request(saturday, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const luck = $(".jsx-2224007166 .jsx-3435773413");
      output1 = luck
        .find("p")
        .slice(0, 1)
        .text();

      output2 = luck
        .find("p")
        .slice(1, 2)
        .text();

      output3 = luck
        .find("p")
        .slice(2, 3)
        .text();

      output4 = luck
        .find("p")
        .slice(3, 4)
        .text();

      output5 = luck
        .find("p")
        .slice(4, 5)
        .text();

      output6 = luck
        .find("p")
        .slice(5, 6)
        .text();

      output7 = luck
        .find("p")
        .slice(6, 7)
        .text();

      output8 = luck
        .find("p")
        .slice(7, 8)
        .text();

      result6 =
        "ดวงคนเกิดวันเสาร์ วันนี้ :" +
        "\n" +
        "\n" +
        output1 +
        "\n" +
        "\n" +
        output2 +
        "\n" +
        "\n" +
        output3 +
        "\n" +
        "\n" +
        output4 +
        "\n" +
        "\n" +
        output5 +
        "\n" +
        "\n" +
        output6 +
        "\n" +
        "\n" +
        output7 +
        "\n" +
        "\n" +
        output8;
    }
  });
  request(sunday, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const luck = $(".jsx-2224007166 .jsx-3435773413");
      output1 = luck
        .find("p")
        .slice(0, 1)
        .text();

      output2 = luck
        .find("p")
        .slice(1, 2)
        .text();

      output3 = luck
        .find("p")
        .slice(2, 3)
        .text();

      output4 = luck
        .find("p")
        .slice(3, 4)
        .text();

      output5 = luck
        .find("p")
        .slice(4, 5)
        .text();

      output6 = luck
        .find("p")
        .slice(5, 6)
        .text();

      output7 = luck
        .find("p")
        .slice(6, 7)
        .text();

      output8 = luck
        .find("p")
        .slice(7, 8)
        .text();

      result7 =
        "ดวงคนเกิดวันอาทิตย์ วันนี้ :" +
        "\n" +
        "\n" +
        output1 +
        "\n" +
        "\n" +
        output2 +
        "\n" +
        "\n" +
        output3 +
        "\n" +
        "\n" +
        output4 +
        "\n" +
        "\n" +
        output5 +
        "\n" +
        "\n" +
        output6 +
        "\n" +
        "\n" +
        output7 +
        "\n" +
        "\n" +
        output8;
    }
  });
  if (temp == "วันจันทร์") {
    result = result1;
  } else if (temp == "วันอังคาร") {
    result = result2;
  } else if (temp == "วันพุธ") {
    result = result3;
  } else if (temp == "วันพฤหัสบดี") {
    result = result4;
  } else if (temp == "วันศุกร์") {
    result = result5;
  } else if (temp == "วันเสาร์") {
    result = result6;
  } else if (temp == "วันอาทิตย์") {
    result = result7;
  } else {
    result = noResult;
  }
  return res.json({
    fulfillmentText: result
  });
});

restService.post("/audio", function(req, res) {
  var speech = "";
  switch (req.body.result.parameters.AudioSample.toLowerCase()) {
    //Speech Synthesis Markup Language
    case "music one":
      speech =
        '<speak><audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>';
      break;
    case "music two":
      speech =
        '<speak><audio clipBegin="1s" clipEnd="3s" src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>';
      break;
    case "music three":
      speech =
        '<speak><audio repeatCount="2" soundLevel="-15db" src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>';
      break;
    case "music four":
      speech =
        '<speak><audio speed="200%" src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>';
      break;
    case "music five":
      speech =
        '<audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio>';
      break;
    case "delay":
      speech =
        '<speak>Let me take a break for 3 seconds. <break time="3s"/> I am back again.</speak>';
      break;
    //https://www.w3.org/TR/speech-synthesis/#S3.2.3
    case "cardinal":
      speech = '<speak><say-as interpret-as="cardinal">12345</say-as></speak>';
      break;
    case "ordinal":
      speech =
        '<speak>I stood <say-as interpret-as="ordinal">10</say-as> in the class exams.</speak>';
      break;
    case "characters":
      speech =
        '<speak>Hello is spelled as <say-as interpret-as="characters">Hello</say-as></speak>';
      break;
    case "fraction":
      speech =
        '<speak>Rather than saying 24+3/4, I should say <say-as interpret-as="fraction">24+3/4</say-as></speak>';
      break;
    case "bleep":
      speech =
        '<speak>I do not want to say <say-as interpret-as="bleep">F&%$#</say-as> word</speak>';
      break;
    case "unit":
      speech =
        '<speak>This road is <say-as interpret-as="unit">50 foot</say-as> wide</speak>';
      break;
    case "verbatim":
      speech =
        '<speak>You spell HELLO as <say-as interpret-as="verbatim">hello</say-as></speak>';
      break;
    case "date one":
      speech =
        '<speak>Today is <say-as interpret-as="date" format="yyyymmdd" detail="1">2017-12-16</say-as></speak>';
      break;
    case "date two":
      speech =
        '<speak>Today is <say-as interpret-as="date" format="dm" detail="1">16-12</say-as></speak>';
      break;
    case "date three":
      speech =
        '<speak>Today is <say-as interpret-as="date" format="dmy" detail="1">16-12-2017</say-as></speak>';
      break;
    case "time":
      speech =
        '<speak>It is <say-as interpret-as="time" format="hms12">2:30pm</say-as> now</speak>';
      break;
    case "telephone one":
      speech =
        '<speak><say-as interpret-as="telephone" format="91">09012345678</say-as> </speak>';
      break;
    case "telephone two":
      speech =
        '<speak><say-as interpret-as="telephone" format="1">(781) 771-7777</say-as> </speak>';
      break;
    // https://www.w3.org/TR/2005/NOTE-ssml-sayas-20050526/#S3.3
    case "alternate":
      speech =
        '<speak>IPL stands for <sub alias="indian premier league">IPL</sub></speak>';
      break;
  }
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

restService.post("/video", function(req, res) {
  return res.json({
    speech:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    displayText:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    source: "webhook-echo-sample"
  });
});

restService.post("/slack-test", function(req, res) {
  var slack_message = {
    text: "Details of JIRA board for Browse and Commerce",
    attachments: [
      {
        title: "JIRA Board",
        title_link: "http://www.google.com",
        color: "#36a64f",

        fields: [
          {
            title: "Epic Count",
            value: "50",
            short: "false"
          },
          {
            title: "Story Count",
            value: "40",
            short: "false"
          }
        ],

        thumb_url:
          "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
      },
      {
        title: "Story status count",
        title_link: "http://www.google.com",
        color: "#f49e42",

        fields: [
          {
            title: "Not started",
            value: "50",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          }
        ]
      }
    ]
  };
  return res.json({
    speech: "speech",
    displayText: "speech",
    source: "webhook-echo-sample",
    data: {
      slack: slack_message
    }
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
