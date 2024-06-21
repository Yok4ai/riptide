import React from 'react';
import './App.css'; // Import global styles
import ColorShiftingBackground from './ColorShiftingBackground';
import UrlForm from './UrlForm';

const App = () => {
  const handleFormSubmit = (url) => {
    console.log('URL:', url);
    // You can handle form submission logic here
  };

  return (
    <div className="App">
      <ColorShiftingBackground />
      <h1>𝙍𝙄𝙋𝙏𝙄𝘿𝙀</h1>
      <div className="download-container">
        <UrlForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default App;
