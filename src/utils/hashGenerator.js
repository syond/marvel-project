import crypto from "crypto-js";

export function hashGenerate() {
  const timestamp = Date.now();

  const hash = crypto.MD5(
    timestamp +
      process.env.REACT_APP_API_PRIVATE_KEY +
      process.env.REACT_APP_API_KEY
  );

  const obj = {
    timestamp: timestamp,
    hash: hash,
  };

  return obj;
}
