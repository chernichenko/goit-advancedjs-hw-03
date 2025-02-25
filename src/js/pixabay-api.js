export const fetchImages = async (searchQuery) => {
  const API_KEY = '49047505-943fdeb799f69f50e2a05df2c';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};