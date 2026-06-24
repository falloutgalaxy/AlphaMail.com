/*
==========================================
ALPHA MAIL WEBSITE
MASTER SCRIPT v1.0
==========================================
*/


/*
==========================================
MOBILE MENU
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const mobileButton = document.querySelector(".mobile-menu");

    const navigation = document.querySelector(".nav-links");

    if (mobileButton && navigation) {

        mobileButton.addEventListener("click", () => {

            navigation.classList.toggle("mobile-active");

        });

    }

});


/*
==========================================
ACTIVE PAGE HIGHLIGHT
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        if (
            href === currentPage ||
            (currentPage === "" && href.includes("index.html"))
        ) {

            link.classList.add("active");

        }

    });

});


/*
==========================================
TRACKING PLACEHOLDER
==========================================
*/

function searchTracking() {

    const input = document.getElementById("tracking-input");

    if (!input) return;

    const trackingNumber = input.value.trim();

    if (trackingNumber === "") {

        alert("Please enter a tracking number.");

        return;

    }

    alert(
        "Live tracking is currently under development.\n\nReference: " +
        trackingNumber +
        "\n\nPlease contact Alpha Mail for assistance."
    );

}


/*
==========================================
CONTACT FORM
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.querySelector(".contact-form");

    if (!contactForm) return;

    const button = contactForm.querySelector("button");

    button.addEventListener("click", (event) => {

        event.preventDefault();

        const fields = contactForm.querySelectorAll(

            "input, textarea"

        );

        let valid = true;

        fields.forEach(field => {

            if (field.value.trim() === "") {

                field.style.borderColor = "#d62828";

                valid = false;

            }

            else {

                field.style.borderColor = "#0E7C96";

            }

        });

        if (!valid) {

            alert(

                "Please complete all required fields."

            );

            return;

        }

        alert(

            "Thank you.\n\nYour enquiry has been received."

        );

        contactForm.reset();

    });

});


/*
==========================================
FADE IN ANIMATION
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(

        "section"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(

                        "show"

                    );

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    sections.forEach(section => {

        section.classList.add(

            "hidden"

        );

        observer.observe(section);

    });

});


/*
==========================================
FUTURE FEATURES PLACEHOLDER
==========================================
*/

// Customer Portal

// Driver Portal

// Fleet Dashboard

// Live Tracking

// Analytics Dashboard

// Job Application System

// Incident Reporting

