
export default function BookCard({ book }) {

    // return (
    //     <div className="p-6 bg-light/5 rounded-xl backdrop-blur-sm">
    //     <h2 className="font-heading text-xl text-gold">
    //         {book.title}
    //     </h2>

    //     <p className="text-light/70 mt-2">
    //         {book.author_name?.[0] || "Unknown Author"}
    //     </p>
    //     </div>
    // );

    return (
        <div className="p-6 bg-light/5 rounded-xl backdrop-blur-sm hover:scale-105 transition m-5">
            <h2 className="font-heading text-xl text-warm">
                {book.title}
            </h2>

            <p className="text-light/70 mt-2">
                {book.author_name?.[0] || "Unknown Author"}
            </p>
        </div>
    );
}