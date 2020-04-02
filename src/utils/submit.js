import "dotenv/config";
import request from "request";
import path from "path";
import fs from "fs";

export const submit = async () => {
  const options = {
    method: "POST",
    url: process.env.SOLUTION + process.env.TOKEN,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    formData: {
      answer: fs.createReadStream(path.resolve("answer.json"))
    }
  };

  request(options, function(err, res, body) {
    if (err) console.log(err);
    console.log(body);
  });
};
