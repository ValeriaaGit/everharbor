import { searchBooks, formatBookData, getCoverUrl } from './openLibraryApi.js';

// Test 1: Search
async function testSearch() {
    try {
        const results = await searchBooks('tolkien');
        console.log('✅ Search successful:', results.length, 'books found');
        console.log('First book:' , results[0]);
    } catch (error) {
        console.error('❌ Search failed:', error.message);
    }
}

// Test 2: Format book
function testFormat() {
    const mockBook = {
        title: 'Test Book',
        author_name: ['Author 1', 'Author 2'],
        cover_i: 123456,
        first_publish_year: 2020,
        key: '/works/OL123W'
    };

    const formatted = formatBookData(mockBook);
    console.log('✅ Formatted book:', formatted);
}

// Test 3: Cover URL
function testCoverUrl() {
    console.log('With ID:', getCoverUrl(123456));
    console.log('Without ID:', getCoverUrl(null));
}


testSearch();
testFormat();
testCoverUrl();