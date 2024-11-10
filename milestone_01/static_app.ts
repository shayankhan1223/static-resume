// Select the button and skills section from the DOM
const toggleSkillsButton = document.getElementById("toggleSkills");
const skillsSection = document.querySelector(".skills-list");

// Check if elements exist before adding event listeners
if (toggleSkillsButton && skillsSection) {
  toggleSkillsButton.addEventListener("click", () => {
    // Toggle the visibility of the skills section
    if (skillsSection instanceof HTMLElement) {
      skillsSection.style.display =
        skillsSection.style.display === "none" ? "block" : "none";
    }
  });
}
