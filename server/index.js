const express = require("express");
const BodyParser = require("body-parser");
const Speakeasy = require("speakeasy");
const app = express();
const axios = require("axios");
const base64 = require("base-64");
const utf8 = require("utf8");
// const { totp } = require("otplib");
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
console.log(7775, stringData);

console.log(sharedSecret);
var getToken = Speakeasy.totp({
  secret: sharedSecret,
  encoding: "base64",
  algorithm: "sha512",
  digits: 10
});
console.log(getToken);
var tokenValidates = Speakeasy.totp.verify({
  secret: sharedSecret,
  token: getToken,
  encoding: "base64",
  algorithm: "sha512",
  digits: 10
});

console.log("hello ", tokenValidates);
const authStringUTF = ReqJSON.contact_email + ":" + getToken;
console.log(authStringUTF);
// const URL = "https://api.challenge.hennge.com/challenges/003";

// totp.options = {
//   digits: 10,
//   algorithm: "sha512",
//   epoch: Date.now(),
//   step: 30,
//   window: 0
// };
// console.log(sharedSecret);
// const TOTP = totp.generate(sharedSecret);
// const isValid = totp.check(TOTP, sharedSecret);

// console.log("Token Info:", TOTP, isValid);

const bytes = utf8.encode(authStringUTF);
console.log(9999, authStringUTF, bytes);
const encoded = base64.encode(bytes);
console.log(encoded);
// console.log(444, authStringUTF, bytes);
const createReq = async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + encoded
      }
    };
    console.log(435, config.headers);
    console.log("Making request", { URL, stringData, config });

    const response = await axios.post(URL, stringData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + encoded
      }
    });
    console.log(response.data);
  } catch (err) {
    console.error(err.response.data);
  }
};

createReq();

app.listen(port, () => {
  console.log(`Im listening on ${port}`);
});
