import { Link } from "react-router-dom";

export function AnotherPage() {
    return (
        <div className="container">
            <div className="px-4 py-8">
                <p className="pb-4">Another Page</p>
                <Link className="underline" to="/">
                    Go Back
                </Link>
            </div>
        </div>
    );
}
