
  $("#signupForm").validate({
    rules: {
      name: { required: true, minlength: 2, },

      password: { required: true, minlength: 5, },

      confirm_password: { required: true, minlength: 5, equalTo: "#password",},

      email: { required: true, email: true, },
      
      gender: { required: true},

      topic: { required: "#newsletter:checked", minlength: 2, },
      agree: "required",
    },

    messages: {
      name: {
        required: "Please enter a name",
        minlength: "Your name must consist of at least 2 characters",
      },

      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
      },
      confirm_password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
        equalTo: "Please enter the same password as above",
      },

      email: "Please enter a valid email address",
      
      gender: "Please enter a gender",

      agree: "Please accept our policy",
      topic: "Please select at least 2 topics",
    },
  });


  // propose username by combining first- and lastname
  $("#username").focus(function () {
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    if (firstname && lastname && !this.value) {
      this.value = firstname + "." + lastname;
    }
  });


  //code to hide topic selection, disable for demo
  var newsletter = $("#newsletter");
  
  // newsletter topics are optional, hide at first
  var inital = newsletter.is(":checked");

  var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
  
  var topicInputs = topics.find("input").attr("disabled", !inital);
  // show when newsletter is checked
  newsletter.click(function () {
    topics[this.checked ? "removeClass" : "addClass"]("gray");
    topicInputs.attr("disabled", !this.checked);
  });
