document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // animationn typing 
    
    var typed = new Typed("#typing-text", {
        strings: ["Java Developer","MongoDB Beginner",  "Spring Boot Developer", "Backend Developer", "REST API Developer","Learning Laravel & PHP"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
      });

// amiation images lottaie 

    //   var animation = lottie.loadAnimation({
    //     container: document.getElementById('lottie-animation'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: './images/Animation_lottiefiles_dev1.json' // replace with your actual path
    //   });

    // First animation
  lottie.loadAnimation({
    container: document.getElementById('lottie-animation-1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/Animation_lottiefiles_dev1.json' // Replace with actual path
  });

  // Second animation
  lottie.loadAnimation({
    container: document.getElementById('lottie-animation-2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/Animation_lottiefiles_dev2.json' // Replace with second animation file path
  });


  // Third animation
  lottie.loadAnimation({
    container: document.getElementById('lottie-animation-3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/Animation_lottiefiles_dev3.json' // Replace with second animation file path
  });

    // four animation
    lottie.loadAnimation({
        container: document.getElementById('lottie-animation-4'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './images/Animation_lottiefiles_dev5.json' // Replace with second animation file path
      });

});




function adjustScroll() {
    var offset = 0; // You can adjust this value as necessary
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center' // Adjusts the alignment to center the element in the viewport
            });
        });
    });
}

function smoothScrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}


// mobile screen script.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});




document.addEventListener("DOMContentLoaded", function() {
   // Get the modal
    var modal = document.getElementById("imageModal");

    // Get the image and insert it inside the modal
    var modalImg = document.getElementById("modalImage");
    
    document.querySelectorAll('.certificate-card img').forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // Close the modal when clicking anywhere outside the image
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// Function to filter and display projects
function filterProjects(category) {
    var cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        var projectType = card.getAttribute('data-project-type');
        if (category === 'all' || projectType === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initially show all cards
filterProjects('all');

// Get the modals
var portfolioModal = document.getElementById("portfolioModal");
var bloodGroupModal = document.getElementById("bloodGroupModal");

// Get the <span> element that closes the modals
var portfolioClose = portfolioModal.getElementsByClassName("close")[0];
var bloodGroupClose = bloodGroupModal.getElementsByClassName("close")[0];

// Function to open modals
function openModal(project) {
    var modal;
    if (project === 'portfolio') {
        modal = portfolioModal;
    } else if (project === 'bloodGroup') {
        modal = bloodGroupModal;
    }

    // Display the modal
    modal.style.display = "block";

    // Scroll to the top of the modal content
    var modalContent = modal.querySelector('.modal-content');
    modalContent.scrollTop = 0;

    document.body.style.overflow = "hidden"; // Prevent scrolling of background content
}

// When the user clicks on <span> (x), close the modals
portfolioClose.onclick = function() {
    portfolioModal.style.display = "none";
    document.body.style.overflow = "auto"; // Allow scrolling of background content
};

bloodGroupClose.onclick = function() {
    bloodGroupModal.style.display = "none";
    document.body.style.overflow = "auto"; // Allow scrolling of background content
};

// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
    if (event.target == portfolioModal) {
        portfolioModal.style.display = "none";
        document.body.style.overflow = "auto"; // Allow scrolling of background content
    } else if (event.target == bloodGroupModal) {
        bloodGroupModal.style.display = "none";
        document.body.style.overflow = "auto"; // Allow scrolling of background content
    }
};

// Placeholder functions for buttons (implement as needed)
function openSourceCode() {
    alert("Opening source code...");
}

function openProject() {
    alert("Opening project...");
}
  




// 2. Sending Email

// Initialize EmailJS with your User ID
emailjs.init("XYSAGh6C6mm2vljVD"); // Replace with your EmailJS User ID

// Function to validate Gmail email address
function validateEmail(email) {
    // Ensure the email ends with @gmail.com
    const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return re.test(String(email).toLowerCase());
}

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

      // Get form values
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;


      // Validate email
      if (!validateEmail(email)) {
        Swal.fire({
            title: "Invalid Email",
            text: "Please enter a valid email address (e.g., subbu@gmail.com or subbu@gmail.org).",
            icon: "error",
            confirmButtonColor: "#0d6efd"
        });
        return;
    }


     // Define template parameters
    var templateParams = {
        email: email,
        message: message
    };
// Send email using EmailJS
    emailjs.send('service_p72apgc', 'template_m6cwqfh', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            // alert('Your message has been sent successfully!');
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent successfully!",
                icon: "success",
                confirmButtonColor: "#0d6efd"
            });
             // Optionally reset form after success
            document.getElementById("contactForm").reset();
        }, function(error) {
            console.error('FAILED...', error);
            // alert('Failed to send your message. Please try again later.');
            console.error('Error details:', error);
            Swal.fire({
                title: "Oops!",
                text: "Failed to send your message. Please try again later.",
                icon: "error",
                confirmButtonColor: "#d33"
            });
        });
}

function downloadCV()
{
  var pdf = "./cv/Subburathinam M_Resume.pdf";
  var atag = document.createElement('a');
  atag.href = pdf; 
  atag.target = "_blank";   // This opens the link in a new tab
  atag.click();
}


document.getElementById('menu-toggle').addEventListener('click', function() {
    console.log('Menu toggle clicked'); // Debugging line
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function navigateToSection(sectionId) {
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        hideSidebar(); // Close the sidebar after scrolling
    }
}



// Experience Modal functions
function openExpModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeExpModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.onclick = function(event) {
    if (event.target.className === 'exp-modal') {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal with ESC key
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key === "Escape") {
        const modals = document.getElementsByClassName('exp-modal');
        for (let modal of modals) {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    }
};







