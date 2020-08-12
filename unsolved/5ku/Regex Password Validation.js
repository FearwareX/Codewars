const validate = (password) => {
  console.log(password);
  if (password.length < 6) {
    return false;
  }
  const reg = /^\S*(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/g;
  return reg.test(password);
};
