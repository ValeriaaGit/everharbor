const BASE_URL = "https://openlibrary.org/search.json";

// export async function searchBooks(query) {
//   try {
//     const response = await fetch(
//       `https://openlibrary.org/search.json?q=${query}`
//     );

//     const data = await response.json();

//     console.log("API Response:", data);

//     return data.docs.slice(0, 20);
//   } catch (error) {
//     console.error("Open Library API error:", error);
//     throw error;
//   }
// }

export async function searchBooks(query) {
    try {
        const response = await fetch(`${BASE_URL}?q=${query}`);

        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }

        const data = await response.json();

        return data.docs.slice(0, 20); // limit results to 20
    } catch (error) {
        console.error("Open Library API error:", error);

        throw error;
    }
}