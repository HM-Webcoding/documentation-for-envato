// Function to highlight the active menu item based on scroll position
function highlightActiveMenuItem() {
    const sections = document.querySelectorAll(".documentation-section");
    const links = document.querySelectorAll(".theme-list a");
  
    let currentSection = "";
  
    // Check which section is in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionBottom = sectionTop + sectionHeight;
  
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
  
      if (
        scrollPosition >= sectionTop - viewportHeight / 2 &&
        scrollPosition < sectionBottom - viewportHeight / 2
      ) {
        currentSection = section.getAttribute("id");
      }
    });
  
    // Highlight the corresponding menu item
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }
  
  // Highlight active menu item on page load, scroll, and resize
  window.addEventListener("scroll", highlightActiveMenuItem);
  window.addEventListener("load", highlightActiveMenuItem);
  window.addEventListener("resize", highlightActiveMenuItem);
  
  // Smooth scrolling for sidebar links
  document.querySelectorAll('.theme-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });