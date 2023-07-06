//return array of username and domain
function emailParts(email) {
  return email.toLowerCase().split("@");
}