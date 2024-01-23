/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Java Developer", "Front-end Developer", "Back-end Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

var typingEffect = new Typed(".typedText-info2", {
  strings: ["embarking on a journey to thrive within a professional and dynamic environment. My goal is to immerse myself in the ever-evolving realm of emerging technologies, allowing me to not only stay current but also embrace the cutting edge. This pursuit will not only hone my skills but also broaden the horizons of my knowledge, enabling me to contribute effectively and adapt swiftly in an ever-changing land.r"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- SCROLL REVEAL LEFT_RIGHT ANIMATION ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- DOWNLOAD RESUME FUNCTION ----- */
function downloadResume() {
  // Replace 'your_resume_url.pdf' with the actual URL of your resume PDF file
  var resumeUrl =
    'https://drive.google.com/file/d/1Jc_Bs3XuvOo8-LEz5uZUgsvgIBAgZKEx/view?usp=sharing';

  // Create a hidden anchor element
  var anchor = document.createElement('a');
  anchor.href = resumeUrl;
  anchor.download = 'https://drive.google.com/file/d/1Jc_Bs3XuvOo8-LEz5uZUgsvgIBAgZKEx/view?usp=sharing'; // Set the desired file name

  // Append the anchor to the body
  document.body.appendChild(anchor);

  // Trigger a click on the anchor to start the download
  anchor.click();

  // Remove the anchor from the body
  document.body.removeChild(anchor);
}

/* ----- SEND MESSAGE FUNCTION ----- */
function sendMessage() {
  // You can customize this message
  var confirmationMessage = "Message has been sent to Mohammed Aftab Yaligar.";

  // Create a notification element
  var notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerText = confirmationMessage;

  // Append the notification to the body
  document.body.appendChild(notification);

  // Optional: You can clear the form fields if needed
  clearFormFields();

  // Remove the notification after a few seconds (adjust the timeout as needed)
  setTimeout(function () {
    document.body.removeChild(notification);
  }, 3000);
}

/* ----- CLEAR FORM FIELDS FUNCTION ----- */
function clearFormFields() {
  // Replace these with the actual IDs of your form fields
  var nameField = document.querySelector('.input-field[placeholder="Name"]');
  var emailField = document.querySelector('.input-field[placeholder="Email"]');
  var messageField = document.querySelector('textarea[placeholder="Message"]');

  // Clear the form fields
  nameField.value = "";
  emailField.value = "";
  messageField.value = "";
}
function sendEmail() {
  var fromEmail = document.querySelector('.input-field[placeholder="Email"]').value;

  if (!fromEmail) {
    alert("Please provide a valid email address.");
    return;
  }

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mohammedaftabyaligar@gmail.com",
    Password: "Aftab@@778866",
    To: "aftabyaligar669@gmail.com",
    From: fromEmail,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then(
    function (message) {
      alert(message);
      resetForm();
    }
  );
}

function resetForm() {
  // Replace 'formId' with the actual ID of your form
  var form = document.getElementById('yourFormId');
  if (form) {
    form.reset();
  }
}



/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
