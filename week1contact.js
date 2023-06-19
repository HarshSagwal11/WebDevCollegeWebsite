// form validation
$(document).ready(function () {
  $("#contactform").submit(function (e) {
    e.preventDefault();

    function validateForm() {
      var name = $("#name").val();
      var email = $("#email").val();
      var subject = $("#subject").val();
      
      var message = $("#message").val();

      if (
        name === "" ||
        email === "" ||
        mobile === "" ||
        password1 === "" ||
        password2 === ""
      ) {
        alert("Please fill in all fields");
        
      }

      $("#name").val("");
      $("#Email").val("");
      $("#subject").val("");
      
      $("#message").val("");

      alert("SignedUp Successfully!");
    }
  });
});
