const fName = document.getElementById("fname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const adduser = document.getElementById("signup");
const fnamerr = document.getElementById("fnamerr");
const lnamerr = document.getElementById("lnamerr");
const emailerr = document.getElementById("emailerr");
const passerr = document.getElementById("passerr");


const displayErr = (errElem, errMsg) => {
  errElem.textContent = errMsg;
};
const checkFNam = () => {
  if (fName.value === "") {
    displayErr(fnamerr, " name is required");
  }
};

const checkEmail = () => {
  if (email.validity.typeMismatch) {
    displayErr(emailerr, "NOT vaild email");
  } else if (email.validity.valueMissing) {
    displayErr(emailerr, "Email is required");
  } else {
    displayErr(emailerr, "");
    return true;
  }
};


fName.addEventListener("focusout", checkFNam);
email.addEventListener("focusout", checkEmail);


adduser.addEventListener("submit", e => {
  if (!checkFNam() || !checkEmail() || !checkPass() || !checkConfirmPw()) {
    e.preventDefault();
  }
});