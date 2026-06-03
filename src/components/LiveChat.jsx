import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Standard and completely safe way to inject Tawk.to script into document body
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/6a1fcf7590b4071c2e9d885a/1jq644p6j';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append safely directly to the document body to prevent null pointer crashes
    document.body.appendChild(script);

    // Cleanup script when component unmounts to prevent multiple instances during hot-reloads
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default LiveChat;
