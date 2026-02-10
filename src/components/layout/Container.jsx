
export default function Container({ children, className = '' }) {

    return (
        <div className={`container mx-auto px-4 ${className}`}>
            {/* container = max-width responsive container */}
            {/* mx-auto = center the container */}
            {/* px-4 = horizontal padding 1rem */}
            {/* className prop allows additional classes to be passed in */}

            {children}
        </div>
    );
}