$(document).ready(function () {
    // Getting references to our form and inputs
    var ageForm = $("form.ageForm");
    var ageInput = $("input.age");

      
        // When the form is submitted, we validate there's an age entered
        ageForm.on("submit", function(event) {
         
          var profileData = {
            age: ageInput.val().trim()
            
          };
          function myFunction() {
            var x = document.getElementByClassName("age-selection-form");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
      
          if (!profileData.age) {
            return alert("Please submit an age to continue");
          }
      
          // If we have an email and password we run the saveAge function and hide the div
          saveAge(profileData.age);
        //    code to hide the div blah blah blah put some code in to make it dissapear;
        });
      
        // saveAge does a post to our "api/profile" route and if successful, redirects us the the members page
        function saveAge(age) {
          $.post("/api/profile", {
            age: age
          })
            
        }
      });