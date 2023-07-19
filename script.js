      document.getElementById("resume-form").addEventListener("submit", function(event) {
          event.preventDefault();

          var fullName = document.getElementById("full-name").value;
          var email = document.getElementById("email").value;
          var phone = document.getElementById("phone").value;
          var university = document.getElementById("university").value;
          var degree = document.getElementById("degree").value;
          var graduationYear = document.getElementById("graduation-year").value;
          var company = document.getElementById("company").value;
          var position = document.getElementById("position").value;
          var duration = document.getElementById("duration").value;
          var skills = document.getElementById("skills").value;

          if (fullName && email && phone && university && degree && graduationYear && company && position && duration && skills) {
              document.getElementById("resume-full-name").textContent = "Full Name: " + fullName;
              document.getElementById("resume-email").textContent = "Email: " + email;
              document.getElementById("resume-phone").textContent = "Phone: " + phone;
              document.getElementById("resume-university").textContent = "University: " + university;
              document.getElementById("resume-degree").textContent = "Degree: " + degree;
              document.getElementById("resume-graduation-year").textContent = "Graduation Year: " + graduationYear;
              document.getElementById("resume-company").textContent = "Company: " + company;
              document.getElementById("resume-position").textContent = "Position: " + position;
              document.getElementById("resume-duration").textContent = "Duration: " + duration;
              document.getElementById("resume-skills").textContent = "Skills: " + skills;

              document.getElementById("resume-form").reset();
              document.getElementById("resume").classList.remove("d-none");
              document.getElementById("alert-success").classList.remove("d-none");
              document.getElementById("alert-danger").classList.add("d-none");
          } else {
              document.getElementById("alert-success").classList.add("d-none");
              document.getElementById("alert-danger").classList.remove("d-none");
          }
      });
