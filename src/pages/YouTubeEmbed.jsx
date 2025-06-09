import React from 'react';
import './YouTubeEmbed.css'; // We'll create this CSS file next

const YouTubeEmbed = ({ videoId, title }) => {
    // Construct the privacy-enhanced embed URL
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

    return (
        <div className="video-responsive">
            <iframe
                src={embedUrl}
                title={title || "YouTube video player"} // Fallback title
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;