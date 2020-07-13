const express = require("express");
const BodyParser = require("body-parser");
const Speakeasy = require("speakeasy");
const app = express();
const axios = require("axios");
const Base64 = require("crypto-js/enc-base64");
const Utf8 = require("crypto-js/enc-utf8");

const port = 5000;
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const ReqJSON = {
  github_url: "https://github.com/RobnettSean22/email-archives",
  contact_email: "robnettsean22@gmail.com"
};
const URL = "https://api.challenge.hennge.com/challenges/003";

const stringData = JSON.stringify(ReqJSON);
const asc = "HENNGECHALLENGE003";
const sharedSecret = ReqJSON.contact_email + asc;

var getToken = Speakeasy.totp({
  secret: sharedSecret,

  algorithm: "sha512",
  digits: 10
});

var tokenValidates = Speakeasy.totp.verify({
  secret: sharedSecret,

  token: getToken,

  algorithm: "sha512",
  digits: 10
});

console.log(tokenValidates);
const authString = ReqJSON.contact_email + ":" + getToken;

const base64 = Base64.stringify(Utf8.parse(authString));
console.log(base64);
const sendInfo = async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + base64
      }
    };
    const res = await axios.post(URL, stringData, config);
    console.log(res.data);
  } catch (err) {
    console.error(err.response.data);
  }
};
sendInfo();

app.listen(port, () => {
  console.log(`Im listening on ${port}`);
});
