const BASE_URL = 'https://openlibrary.org/search.json';

/**
 * Search for books using Open Library API
 * @param {string} query - Search term
 * @returns {Promise<Array>} Array of formatted book objects
 * @throws {Error} With categorized error messages
 */

export async function searchBooks(query) {
  // Input validation
  if (!query || query.trim() === '') {
    throw new Error('INVALID_QUERY');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  
  try {
    const response = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(query.trim())}`,
      { signal: controller.signal }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP_ERROR_${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter out invalid books and limit results
    const validBooks = data.docs.filter(isValidBookData);
    return validBooks.slice(0, 20);
    
  } catch (error) {
    clearTimeout(timeoutId);
    
    // Categorize errors for component handling
    if (error.name === 'AbortError') {
      throw new Error('TIMEOUT');
    }
    if (error.message.includes('Failed to fetch')) {
      throw new Error('NETWORK_ERROR');
    }
    
    throw error;
  }
}

/**
 * Format raw book data from API into consistent structure
 * @param {Object} book - Raw book object from API
 * @returns {Object} Formatted book data
 */
export function formatBookData(book) {
  return {
    title: book.title || 'Untitled',
    authors: book.author_name 
      ? book.author_name.join(', ') 
      : 'Unknown Author',
    coverUrl: getCoverUrl(book.cover_i),
    year: book.first_publish_year || 'Year unknown',
    bookKey: book.key || ''
  };
}

/**
 * Construct cover image URL from Open Library
 * @param {number|null} coverId - Cover ID from API
 * @param {string} size - Size: 'S', 'M', or 'L'
 * @returns {string} Cover image URL or placeholder
 */
export function getCoverUrl(coverId, size = 'M') {
  if (!coverId) {
    return '/placeholder-cover.png';
  }
  return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
}

/**
 * Validate book data structure from API
 * @param {Object} book - Book object to validate
 * @returns {boolean} True if valid
 */
function isValidBookData(book) {
  return (
    book &&
    typeof book.title === 'string' &&
    book.key &&
    (book.author_name === undefined || Array.isArray(book.author_name))
  );
}