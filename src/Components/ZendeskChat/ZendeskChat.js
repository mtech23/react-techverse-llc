import React, { useEffect } from 'react';

const ZendeskChat = () => {
  useEffect(() => {
    // Dynamically load the Zendesk chat script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=73305a79-f6b0-4b90-ab2b-f83f0361e8ad';  // Your Zendesk key
    script.async = true;
    script.onload = () => {
      // You can initialize or customize the widget here if needed
      if (window.zE) {
        window.zE('webWidget', 'setAccount', '73305a79-f6b0-4b90-ab2b-f83f0361e8ad');
        window.zE('webWidget', 'setHelpCenterSuggestions', false);
      }
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []); // Empty dependency array to run this only once

  return null;
};

export default ZendeskChat;
