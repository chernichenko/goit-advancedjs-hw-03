import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.querySelector('input[type="text"]');
const button = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchQuery = input.value.trim();

  if (!searchQuery) return;

  showLoader();

  const images = await fetchImages(searchQuery);
  renderImages(images);

  hideLoader();
});
