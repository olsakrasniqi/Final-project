  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ticketForm");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const cardNumber = document.getElementById("cardNumber");

    const ticketTypes = ["Football", "Basketball", "NFL", "Racing"];

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const fName = firstName.value.trim();
      const lName = lastName.value.trim();
      const emailVal = email.value.trim();
      const phoneVal = phone.value.trim();
      const cardVal = cardNumber.value.trim();

      let valid = true;

      if (/\d/.test(fName)) {
        showError(firstName, "Name should not contain numbers");
        valid = false;
      } else {
        clearError(firstName);
      }

      if (/\d/.test(lName)) {
        showError(lastName, "Last name should not contain numbers");
        valid = false;
      } else {
        clearError(lastName);
      }

      if (!/^[0-9]+$/.test(phoneVal)) {
        showError(phone, "Phone should contain only numbers");
        valid = false;
      } else {
        clearError(phone);
      }

      if (!/^[0-9]{16}$/.test(cardVal)) {
        showError(cardNumber, "Card number must be 16 digits");
        valid = false;
      } else {
        clearError(cardNumber);
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        showError(email, "Enter a valid email address");
        valid = false;
      } else {
        clearError(email);
      }

      if (valid) {
        alert("Form submitted successfully!");
        console.log("Available tickets:");
        for (let i = 0; i < ticketTypes.length; i++) {
          console.log(ticketTypes[i]);
        }
        form.reset();
      }
    });

    function showError(input, message) {
      input.style.borderColor = "red";
      if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error-msg")) {
        const error = document.createElement("div");
        error.className = "error-msg";
        error.style.color = "red";
        error.style.fontSize = "0.9em";
        error.innerText = message;
        input.parentNode.appendChild(error);
      } else {
        input.nextElementSibling.innerText = message;
      }
    }

    function clearError(input) {
      input.style.borderColor = "#34568c";
      if (input.nextElementSibling && input.nextElementSibling.classList.contains("error-msg")) {
        input.nextElementSibling.remove();
      }
    }
  });

  $(document).ready(function () {
    $("input").focus(function () {
      $(this).css("background-color", "#eef6ff");
    });
    $("input").blur(function () {
      $(this).css("background-color", "white");
    });

    $("button").hover(
      function () {
        $(this).addClass("shadow");
      },
      function () {
        $(this).removeClass("shadow");
      }
    );
  });
