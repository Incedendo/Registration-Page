// The event handler function for the phone number text box

function chkFName() {
  var fname = document.getElementById("first_name");

  // Test the format of the input phone number

  var pos = fname.value.search(/^[A-Z]{1}[a-z]{1,}$/);

  if (pos != 0) {
    alert("The phone number you entered (" + fname.value +
      ") is not in the correct form. \n" +
      "The correct form is: ddd-ddd-dddd \n" +
      "Please go back and fix your phone number");
    fname.value = "";
    document.getElementById("first_name").focus();
    return false;
  } else
  return true;
}

function chkMName() {
  var mname = document.getElementById("middle_name");

  // Test the format of the input phone number

  var pos = mname.value.search(/^[A-Z]\.?$/);

  if (pos != 0) {
    alert("The phone number you entered (" + mname.value +
      ") is not in the correct form. \n" +
      "The correct form is: ddd-ddd-dddd \n" +
      "Please go back and fix your phone number");
    mname.value = "";
    return false;
    document.getElementById("middle_name").focus();
  } else
  return true;
}

function chkLName() {
  var lname = document.getElementById("last_name");

  // Test the format of the input phone number

  var pos = lname.value.search(/^[A-Z]{1}[a-z]{1,}$/);

  if (pos != 0) {
    alert("The phone number you entered (" + lname.value +
      ") is not in the correct form. \n" +
      "The correct form is: ddd-ddd-dddd \n" +
      "Please go back and fix your phone number");
    lname.value = "";
    document.getElementById("last_name").focus();
    return false;
  } else
  return true;
}

function chkPhone() {
  var myPhone = document.getElementById("Phone");

  // Test the format of the input phone number

  var pos = myPhone.value.search(/^\d{3}-\d{3}-\d{4}$/);

  if (pos != 0) {
    alert("The phone number you entered (" + myPhone.value +
      ") is not in the correct form. \n" +
      "The correct form is: ddd-ddd-dddd \n" +
      "Please go back and fix your phone number");
    myPhone.value = "";
    document.getElementById("Phone").focus();
    return false;
  }else
  return true;
}

function chkWorkPhone() {
  var myWorkPhone = document.getElementById("WorkPhone");

  // Test the format of the input phone number

  var pos = myWorkPhone.value.search(/^\d{3}-\d{3}-\d{4}$/);

  if (pos != 0) {
    alert("The phone number you entered (" + myWorkPhone.value +
      ") is not in the correct form. \n" +
      "The correct form is: ddd-ddd-dddd \n" +
      "Please go back and fix your phone number");
    myWorkPhone.value = "";
    document.getElementById("myWorkPhone").focus();
    return false;
  }else
  return true;
}

function chkZip() {
  var myZip = document.getElementById("Zip");

  // Test the format of the input phone number

  var pos = myZip.value.search(/^\d{5}$/);

  if (pos != 0) {
    alert("The zip number you entered (" + myZip.value +
      ") is not in the correct form. \n" +
      "The correct form is: ddddd \n" +
      "Please go back and fix your zip number");
    myZip.value = "";
    document.getElementById("Zip").focus();
    return false;
  }else
  return true;
}

function chkEmail() {
  var myEmail = document.getElementById("Email");

  // Test the format of the input phone number

  var pos = myEmail.value.search(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  if (pos != 0) {
    alert("The zip number you entered (" + myEmail.value +
      ") is not in the correct form. \n" +
      "The correct form is: ddddd \n" +
      "Please go back and fix your zip number");
    myEmail.value = "";
    document.getElementById("Email").focus();
    return false;
  }else
  return true;
}

function chkCardNumber() {
  var myCardNumber = document.getElementById("CardNumber");

  // Test the format of the input phone number

  var pos = myCardNumber.value.search(/^\d{4}-\d{4}-\d{4}-\d{4}$/);

  if (pos != 0) {
    alert("The card number you entered (" + myCardNumber.value +
      ") is not in the correct form. \n" +
      "The correct form is: dddd-dddd-dddd-dddd \n" +
      "Please go back and fix your card number");
    myCardNumber.value = "";
    document.getElementById("CardNumber").focus();
    return false;
  }else
  return true;
}






