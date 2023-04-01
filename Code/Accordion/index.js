// Function to toggle an accordion item
function toggleAccordion(event) {
    const accordionItem = event.target.closest(".accordion-item");
    if (accordionItem) {
      accordionItem.classList.toggle("active");
    }
  }
  