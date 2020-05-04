function deactivateTooltips() {
  var tooltips = document.querySelectorAll(".tooltip"),
    tooltipsLength = tooltips.length;

  for (var i = 0; i < tooltipsLength; i++) {
    tooltips[i].style.display = "none";
  }
}

function getTooltip(elements) {
  while ((elements = elements.nextSibling)) {
    if (elements.className === "tooltip") {
      return elements;
    }
  }

  return false;
}

var check = {};

check["firstName"] = function () {
  var firstName = document.getElementById("firstName"),
    tooltipStyle = getTooltip(firstName).style;

  if (firstName.value.length >= 2) {
    firstName.className = "correct";
    tooltipStyle.display = "none";
    return true;
  } else {
    firstName.className = "incorrect";
    tooltipStyle.display = "inline-block";
    return false;
  }
};

check["lastName"] = function () {
  var lastName = document.getElementById("lastName"),
    tooltipStyle = getTooltip(lastName).style;

  if (lastName.value.length >= 2) {
    lastName.className = "correct";
    tooltipStyle.display = "none";
    return true;
  } else {
    lastName.className = "incorrect";
    tooltipStyle.display = "inline-block";
    return false;
  }
};

check["city"] = function () {
  var city = document.getElementById("city"),
    tooltipStyle = getTooltip(city).style;

  if (city.value.length >= 2) {
    city.className = "correct";
    tooltipStyle.display = "none";
    return true;
  } else {
    city.className = "incorrect";
    tooltipStyle.display = "inline-block";
    return false;
  }
};

check["adress"] = function () {
  var adress = document.getElementById("adress"),
    tooltipStyle = getTooltip(adress).style;

  if (adress.value.length >= 2) {
    adress.className = "correct";
    tooltipStyle.display = "none";
    return true;
  } else {
    adress.className = "incorrect";
    tooltipStyle.display = "inline-block";
    return false;
  }
};
check["email"] = function () {
  var email = document.getElementById("email"),
    tooltipStyle = getTooltip(email).style,
    emailValue = email.value,
    regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  if (regex.test(emailValue)) {
    email.className = "correct";
    tooltipStyle.display = "none";
    return true;
  } else {
    email.className = "incorrect";
    tooltipStyle.display = "inline-block";
    return false;
  }
};
check["phoneNumber"] = function () {
  var phoneNumber = document.getElementById("phoneNumber"),
    tooltipStyle = getTooltip(phoneNumber).style,
    phoneNumberValue = phoneNumber.value,
    regex = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

  if (regex.test(phoneNumberValue)) {
    phoneNumber.className = "correct";
    tooltipStyle.display = "none";
    return true;
  } else {
    phoneNumber.className = "incorrect";
    tooltipStyle.display = "inline-block";
    return false;
  }
};

(function () {
  document.addEventListener("DOMContentLoaded", function (event) {
    var myForm = document.getElementById("myForm"),
      inputs = document.querySelectorAll(
        "input[type=text], input[type=email], input[type=number]"
      ),
      inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
      inputs[i].addEventListener("keyup", function (e) {
        check[e.target.id](e.target.id);
      });
    }

    myForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var result = true;

      for (var i in check) {
        result = check[i](i) && result;
      }

      if (result) {
        alert("Le formulaire est bien rempli.");
      }

      e.preventDefault();
    });
  });
})();
