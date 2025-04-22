// Get all nav-link elements
const currentPagePath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');
const isHomePage = currentPagePath === '/';
// Add click event listener to each nav-link
navLinks.forEach((link) => {
  const linkPath = new URL(link.href).pathname;
  if (
    (isHomePage && (linkPath === '/' || linkPath.endsWith('/index.html'))) ||
    (linkPath !== '/' &&
      !linkPath.endsWith('/index.html') &&
      currentPagePath === linkPath)
  ) {
    link.classList.add('selected');
  }
});

const notification = document.querySelector('.custom-alert');

// Check if the notification element exists on the page
if (notification) {
  // Set a timer for 3000 milliseconds (3 seconds)
  setTimeout(() => {
    // Add the 'hidden' class to start the fade-out effect
    notification.classList.add('hidden');
    // Optional: Remove the element completely after the fade-out
    //  setTimeout(() => {
    //    notification.remove();
    // }, 500); // Match the transition duration in CSS
  }, 3000); // 3 seconds delay
}
