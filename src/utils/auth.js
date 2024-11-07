import CryptoJS from "crypto-js";

const passKey = import.meta.env.VITE_APP_SECRET_PASS_KEY;

export const encryptPassword = (pwd) => {
  let newPassword = CryptoJS.SHA512(pwd, passKey).toString();
  return newPassword;
};

