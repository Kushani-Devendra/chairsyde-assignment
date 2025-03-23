const menuButton = document.getElementById("menuButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const menuIcon = document.getElementById("menuIcon");

// Toggle menu with animation
menuButton.addEventListener("click", () => {
  const isOpen = !dropdownMenu.classList.contains("invisible");

  dropdownMenu.classList.toggle("invisible", isOpen);
  dropdownMenu.classList.toggle("opacity-0", isOpen);
  dropdownMenu.classList.toggle("scale-95", isOpen);

  // Rotate icon 180deg when menu opens
  menuIcon.classList.toggle("rotate-180", !isOpen);
});

// Close when clicking outside
window.addEventListener("click", (event) => {
  if (
    !menuButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.add("invisible", "opacity-0", "scale-95");
    menuIcon.classList.remove("rotate-180");
  }
});

// ------------------

const chevronButton = document.getElementById("chevronButton");
const chevronIcon = document.getElementById("chevronIcon");
const transcriptionSection = document.getElementById("transcriptionBar");
const heading = document.getElementById("transcriptionHeading");
const bookIcon = document.getElementById("bookIcon");
const transcriptionBody = document.getElementById("transcriptionBody");

// Toggle the transcription section
chevronButton.addEventListener("click", () => {
  const isCollapsed = transcriptionSection.classList.contains("w-16");

  // Toggle width, show/hide content, and rotate chevron
  transcriptionSection.classList.toggle("w-sm", isCollapsed);
  transcriptionSection.classList.toggle("w-16", !isCollapsed);

  heading.classList.toggle("hidden", !isCollapsed);
  bookIcon.classList.toggle("hidden", !isCollapsed);
  transcriptionBody.classList.toggle("opacity-0", !isCollapsed);

  // Rotate the chevron
  chevronIcon.classList.toggle("rotate-180", isCollapsed);
});

// ----------------
document.querySelectorAll(".navLink").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".menu-item")
      .forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});
