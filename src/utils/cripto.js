import crypto from "crypto";

export default function cripto(text) {
  return crypto
    .createHash("sha1")
    .update(text)
    .digest("hex");
}
