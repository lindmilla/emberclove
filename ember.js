// Select all sections with the class 'text-block'
const blocks = document.querySelectorAll('.text-block');

// Function to check which block is in view
function updateActiveBlock() {
  blocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;

    if (inView) {
      block.classList.add('active');
    } else {
      block.classList.remove('active');
    }
  });
}

// Run the function on scroll and on page load
window.addEventListener('scroll', updateActiveBlock);
window.addEventListener('load', updateActiveBlock);
