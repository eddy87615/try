import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    const logoTimeout = setTimeout(() => {
      // Add your logic for fading out the logo here
    }, 1200);

    return () => {
      clearTimeout(splashTimeout);
      clearTimeout(logoTimeout);
    };
  }, []);

  return (
    <div>
      {showSplash && (
        <div id="splash" className="splash">
          {/* Your splash content goes here */}
        </div>
      )}
      <div className={showSplash ? 'hidden' : 'appear'}>
        {/* Content to show after splash is hidden */}
      </div>
    </div>
  );
}

export default App;
