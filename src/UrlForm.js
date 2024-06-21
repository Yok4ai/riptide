//old code

// import React, { useState } from 'react';
// import './UrlForm.css'; // Import CSS for styling

// const UrlForm = () => {
//     const [url, setUrl] = useState('');
//     const [error, setError] = useState('');
//     const [downloading, setDownloading] = useState(false); // Track download state

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setDownloading(true); // Start downloading

//         try {
//             const response = await fetch('https://riptide-repo.onrender.com/download', { // Replace with your Flask backend URL
//             // const response = await fetch('https://riptide-repo.onrender.com/download', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ url }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to fetch video');
//             }

//             const blob = await response.blob();
//             const downloadUrl = window.URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.href = downloadUrl;
//             a.download = 'video.mp4';
//             document.body.appendChild(a);
//             a.click();
//             a.remove();

//             // Clear input field and error
//             setUrl('');
//             setError('');
//         } catch (error) {
//             console.error('Error downloading video:', error);
//             setError('Failed to fetch video');
//         } finally {
//             setDownloading(false); // Stop downloading
//         }
//     };

//     return (
//         <div className="url-form-container">
//             <form onSubmit={handleSubmit} className="centered-form">
//                 <input
//                     type="text"
//                     placeholder="Paste Video URL"
//                     value={url}
//                     onChange={(e) => setUrl(e.target.value)}
//                     className="url-input"
//                 />
//                 <button type="submit" className="submit-button">Download</button>
//                 {error && <p className="error-message">{error}</p>}
//                 {downloading && <div className="downloading-indicator"></div>}
//             </form>
//         </div>
//     );
// };

// export default UrlForm;

//`````````````````````````````````````````end of code`````````````````````````````````````//



//new code

// import React, { useState } from 'react';
// import './UrlForm.css'; // Import CSS for styling

// const UrlForm = () => {
//     const [url, setUrl] = useState('');
//     const [error, setError] = useState('');
//     const [downloading, setDownloading] = useState(false); // Track download state
//     const [videoUrl, setVideoUrl] = useState(''); // State to store video URL

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setDownloading(true); // Start downloading

//         try {
//             const response = await fetch('https://riptide-repo.onrender.com/download', { // Replace with your backend URL
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ url }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to fetch video');
//             }

//             const blob = await response.blob();
//             const downloadUrl = window.URL.createObjectURL(blob);
//             setVideoUrl(downloadUrl); // Set the video URL to display it

//             // Clear input field and error
//             setUrl('');
//             setError('');
//         } catch (error) {
//             console.error('Error downloading video:', error);
//             setError('Failed to fetch video');
//         } finally {
//             setDownloading(false); // Stop downloading
//         }
//     };

//     return (
//         <div className="App">
//             <div className="download-container">
//                 <form onSubmit={handleSubmit} className="centered-form">
//                     <input
//                         type="text"
//                         placeholder="Paste Video URL"
//                         value={url}
//                         onChange={(e) => setUrl(e.target.value)}
//                         className="url-input"
//                     />
//                     <button type="submit" className="submit-button">Download</button>
//                     {error && <p className="error-message">{error}</p>}
//                     {downloading && <div className="downloading-indicator"></div>}
//                 </form>
//             </div>
//             {videoUrl && (
//                 <div className="video-container">
//                     <video controls className="video-player">
//                         <source src={videoUrl} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UrlForm;

//`````````````````````````````````````````end of code`````````````````````````````````````//

//#######update: video player added#######//


// import React, { useState } from 'react';
// import './UrlForm.css'; // Import CSS for styling

// const UrlForm = () => {
//     const [url, setUrl] = useState('');
//     const [error, setError] = useState('');
//     const [downloading, setDownloading] = useState(false); // Track download state
//     const [videoUrl, setVideoUrl] = useState(''); // State to store video URL

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setVideoUrl(''); // Clear previous video URL
//         setDownloading(true); // Start downloading

//         try {
//             const response = await fetch('https://riptide-repo.onrender.com/download', { // Replace with your backend URL
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ url }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to fetch video');
//             }

//             const blob = await response.blob();
//             const downloadUrl = window.URL.createObjectURL(blob);
//             setVideoUrl(downloadUrl); // Set the video URL to display it

//             // Clear input field and error
//             setUrl('');
//             setError('');
//         } catch (error) {
//             console.error('Error downloading video:', error);
//             setError('Failed to fetch video');
//         } finally {
//             setDownloading(false); // Stop downloading
//         }
//     };

//     return (
//         <div className="App">
//             <div className="download-container">
//                 <form onSubmit={handleSubmit} className="centered-form">
//                     <input
//                         type="text"
//                         placeholder="Paste Video URL"
//                         value={url}
//                         onChange={(e) => setUrl(e.target.value)}
//                         className="url-input"
//                     />
//                     <button type="submit" className="submit-button">Download</button>
//                     {error && <p className="error-message">{error}</p>}
//                     {downloading && <div className="downloading-indicator"></div>}
//                 </form>
//             </div>
//             {videoUrl && (
//                 <div className="video-container">
//                     <video controls className="video-player">
//                         <source src={videoUrl} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UrlForm;

//`````````````````````````````````````````end of code`````````````````````````````````````//


// update: added progress bar with percentage//

import React, { useState } from 'react';
import './UrlForm.css'; // Import CSS for styling

const UrlForm = () => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [downloading, setDownloading] = useState(false); // Track download state
    const [videoUrl, setVideoUrl] = useState(''); // State to store video URL
    const [progress, setProgress] = useState(0); // State to track download progress

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setVideoUrl(''); // Clear previous video URL
        setDownloading(true); // Start downloading
        setProgress(0); // Reset progress

        try {
            const response = await fetch('https://riptide-repo.onrender.com/download', { // Replace with your backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch video');
            }

            const reader = response.body.getReader();
            const contentLength = +response.headers.get('Content-Length');
            let receivedLength = 0; // Progress tracker
            const chunks = []; // Array to store the chunks of data

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                chunks.push(value);
                receivedLength += value.length;
                setProgress((receivedLength / contentLength) * 100); // Update progress
            }

            const blob = new Blob(chunks);
            const downloadUrl = window.URL.createObjectURL(blob);
            setVideoUrl(downloadUrl); // Set the video URL to display it

            // Clear input field and error
            setUrl('');
            setError('');
        } catch (error) {
            console.error('Error downloading video:', error);
            setError('Failed to fetch video');
        } finally {
            setDownloading(false); // Stop downloading
        }
    };

    return (
        <div className="App">
            <div className="download-container">
                <form onSubmit={handleSubmit} className="centered-form">
                    <input
                        type="text"
                        placeholder="Paste Video URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="url-input"
                    />
                    <button type="submit" className="submit-button">Download</button>
                    {error && <p className="error-message">{error}</p>}
                    {downloading && <p className="downloading-message">Downloading - {Math.round(progress)}%</p>}
                    {downloading && <div className="progress-bar" style={{ width: `${progress}%` }}></div>}
                </form>
            </div>
            {videoUrl && (
                <div className="video-container">
                    <video controls className="video-player">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </div>
    );
};

export default UrlForm;


//`````````````````````````````````````````end of code`````````````````````````````````````//