// Sample data for events, cabinet members, and alumni cabinet and in the last convenor.
const eventsData = [
    { title: "Event 1", date: "July 10, 2023" },
    { title: "Event 2", date: "August 5, 2023" },
    { title: "Event 3", date: "September 2, 2023" }
];

const cabinetMembersData = [
    { name: "Sagar Yadav", position: "General Secretary" },
    { name: "Yatesh Agrawal", position: "General Secretary" },
    { name: "Mahima Rastogi", position: "Joint Secretary" }
];

const alumniMembersData = [
    { name: "Sachin Kumar", position: "Alumni General Secretary" },
    { name: "Abhimanyu Pandey", position: "Alumni General Secretary" },
    { name: "Varsha Tomar", position: "Alumni Joint Secretary" }
];

// JavaScript code for convenor section
document.addEventListener('DOMContentLoaded', function () {
    // Get the convenor details element
    var convenorDetails = document.querySelector('.convenor-details');

    // Update the convenor details
    function updateConvenorDetails(name, position) {
        convenorDetails.innerHTML = `
        <h3>${name}</h3>
        <p>${position}</p>
      `;
    }

    // Fetch convenor details from an API or use hardcoded values
    // Replace with your own convenor details
    var convenorName = 'Dr. Saloni Srivastava';
    var convenorPosition = 'Convenor of Abhiruchi Society';

    // Update the convenor details on page load
    updateConvenorDetails(convenorName, convenorPosition);
});


// Function to dynamically generate event elements
function generateEventElements() {
    const eventContainer = document.querySelector("#events .event-container");

    eventsData.forEach(event => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");
        eventElement.innerHTML = `
        <h3>${event.title}</h3>
        <p>Date: ${event.date}</p>
      `;
        eventContainer.appendChild(eventElement);
    });
}

// Function to dynamically generate cabinet member elements
function generateCabinetMemberElements() {
    const cabinetContainer = document.querySelector("#cabinet .cabinet-members");

    cabinetMembersData.forEach(member => {
        const memberElement = document.createElement("div");
        memberElement.classList.add("member");
        memberElement.innerHTML = `
        <h4>${member.name}</h4>
        <p>${member.position}</p>
      `;
        cabinetContainer.appendChild(memberElement);
    });
}

// Function to dynamically generate alumni member elements
function generateAlumniMemberElements() {
    const alumniContainer = document.querySelector("#alumni .alumni-members");

    alumniMembersData.forEach(member => {
        const memberElement = document.createElement("div");
        memberElement.classList.add("member");
        memberElement.innerHTML = `
        <h4>${member.name}</h4>
        <p>${member.position}</p>
      `;
        alumniContainer.appendChild(memberElement);
    });
}

// Call the functions to generate the elements when the page loads
window.addEventListener("DOMContentLoaded", () => {
    generateEventElements();
    generateCabinetMemberElements();
    generateAlumniMemberElements();
});

// JavaScript code for registration form

// Get the form element
var form = document.querySelector('form-group');

// Event listener for form submit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    // Create an object to store the form data
    var formData = {
        name: name,
        email: email,
        phone: phone

    };

    // Save the form data using your preferred method (e.g., local storage, AJAX request, etc.)
    saveFormData(formData);

    // Show a success message or redirect to a success page
    alert('Form data submitted successfully!');
    // You can also redirect to a success page using:
    // window.location.href = 'success.html';
});

// Function to save the form data (replace with your preferred method)
function saveFormData(formData) {
    // Here, you can implement your logic to save the form data
    // Examples:
    // - Store the data in a local database or file
    // - Send an AJAX request to a server to save the data
    // - Use a backend scripting language (e.g., PHP) to handle the form submission
    // Customize this function based on your requirements
}
// JavaScript code for introduction section

// Function to initialize any dynamic functionality
function initializeIntroductionSection() {
    // Add event listeners or other functionality here
}

// Event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
    initializeIntroductionSection();
});
