import {JSX} from "react";

export default function Blog(): JSX.Element {
    return (
        <div className="blog-page">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <p>Welcome to the blog page! Here you can find my latest thoughts and articles.</p>
            {/* Add your blog content here */}
        </div>
    );
}