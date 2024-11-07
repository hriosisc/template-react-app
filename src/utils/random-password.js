function randomPassword(lenght) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>?";
  let randomPassword = "";
  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomPassword += characters[randomIndex];
  }
  return randomPassword;
}

export { randomPassword };
