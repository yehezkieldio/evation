import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="container">
            <div className="px-4 py-8">
                <p className="pb-4">Home</p>
                <Link className="underline" to="/another-page">
                    Go To Another Page
                </Link>
            </div>
        </div>
    );
}
