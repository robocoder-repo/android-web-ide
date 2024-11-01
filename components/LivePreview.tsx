
"use client";

import React, { useEffect, useRef } from 'react';

interface LivePreviewProps {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ htmlCode, cssCode, jsCode }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const document = iframeRef.current.contentDocument;
      const content = `
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `;
      document?.open();
      document?.write(content);
      document?.close();
    }
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="h-full">
      <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
      <iframe
        ref={iframeRef}
        title="Live Preview"
        className="w-full h-full border border-gray-300 rounded"
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default LivePreview;
