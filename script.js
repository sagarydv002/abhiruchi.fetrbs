// Sample data for events, cabinet members, and alumni cabinet
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
  
