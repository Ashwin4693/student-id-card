const toggleButton = document.getElementById('toggleButton');
const extraInfo = document.getElementById('extraInfo');

let isVisible = false;

const toggleInfo = () => {
  isVisible = !isVisible;
  extraInfo.classList.toggle('hidden', !isVisible);
  toggleButton.textContent = isVisible ? 'Show Less' : 'Show More';
};

toggleButton.addEventListener('click', toggleInfo);
