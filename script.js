let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    //* FIRST: Send the message to yourself
    emailjs.sendForm("service_x2bn5h9", "template_9qnuc1b", this).then(
      () => {
        console.log("✅ Message sent to owner successfully.");
      },
      (error) => {
        console.error("❌ Failed to send to owner.", error);
      }
    );

    //* SECOND: Send the auto-reply to user
    emailjs.sendForm("service_x2bn5h9", "template_m5v4syj", this).then(
      () => {
        alert("✅ Message Sent Successfully!");
        this.reset(); // Reset form after sending
      },
      (error) => {
        alert("❌ Failed to send message. Please try again later.");
        console.error("Error:", error);
      }
    );
  });

//* Discord Copy Function
function copyDiscord() {
navigator.clipboard.writeText("rm04#3025").then(() => {
  alert("✅ Discord tag copied to clipboard!");
}).catch(err => {
  alert("❌ Failed to copy Discord tag.");
  console.error(err);
});
}

//* Hire me Function
function hireMe() {
  //* Confetti
  for (let i = 0; i < 6; i++) {
    confetti({
      particleCount: 40,
      startVelocity: 35,
      spread: 90,
      origin: {
        x: i / 5,    // from left (0) to right (1)
        y: 0         // top of the screen
      }
    });
  }

  //* Smooth scroll to contact section
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });

  //* Prefill contact form after a small delay for smoother UX
  setTimeout(() => {
    document.querySelector('input[name="name"]').value = "Hiring Manager";
    document.querySelector('input[name="email"]').value = "manager@example.com";
    document.querySelector('input[name="phone"]').value = "07123456789";
    document.querySelector('input[name="subject"]').value = "Software Engineering Role";
    document.querySelector('textarea[name="message"]').value = 
      "Hi Riyaz, I'm interested in discussing a software engineering opportunity with you. Please reach out!";
  }, 600);
}