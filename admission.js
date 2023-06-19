// form validation
$(document).ready(function () {
    $("#contactform").submit(function (e) {
      e.preventDefault();
  
      function validateForm() {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var applied = $("#applied").val();
        var message = $("#message").val();
  
        if (
          name === "" ||
          email === "" ||
          mobile === "" ||
          password1 === "" ||
          password2 === ""
        ) {
          alert("Please fill in all fields");
          return;
        }
  
        $("#name").val("");
        $("#Email").val("");
        $("#subject").val("");
        $("#applied").val("");
        $("#message").val("");
  
        alert("SignedUp Successfully!");
      }
    });
  });
  