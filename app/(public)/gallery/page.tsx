import {JSX} from "react";

export default function Gallery(): JSX.Element {
    return (
        <div className="gallery-page">
            <h1 className="text-3xl font-bold mb-4">Gallery</h1>
            <p>Welcome to the gallery page! Here you can find a collection of my artwork and projects.</p>
            {/* Add your gallery content here */}
        </div>
    );
}