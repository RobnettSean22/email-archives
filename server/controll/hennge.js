const axios = require("axios");
const base64 = require("base-64");
const utf8 = require("utf8");
const { totp } = require("otplib");
module.exports = {
  sent: (req, res, next) => {
    const ReqJSON = {
      github_url: "ABC",
      contact_email: "ABC"
    };

    const stringData = JSON.stringify(ReqJSON);

    const URL = "ABC";
    const sharedSecret = ReqJSON.contact_email + "HENNGECHALLENGE003";

    totp.options = { digits: 10, algorithm: "sha512", epoch: 0 };

    const MyTOTP = totp.generate(sharedSecret);
    var isValid = totp.check(MyTOTP, sharedSecret);
    var isValid = totp.verify(MyTOTP, sharedSecret);

    console.log("Token Info:", { MyTOTP, isValid });

    const authStringUTF = ReqJSON.contact_email + ":" + MyTOTP;
    const bytes = utf8.encode(authStringUTF);
    const encoded = base64.encode(bytes);

    const createReq = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + encoded
          }
        };

        console.log("Making request", { URL, ReqJSON, config });

        const response = await axios.post(URL, stringData, config);
        console.log(response.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    createReq();
  }
};
