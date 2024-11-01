
"use client";

import { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import LivePreview from './LivePreview';
import AiChat from './AiChat';

export default function AndroidIde() {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello, World!</h1>');
  const [cssCode, setCssCode] = useState('body { font-family: Arial, sans-serif; }');
  const [jsCode, setJsCode] = useState('console.log("Hello from JavaScript!");');

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-2">
          <CodeEditor
            htmlCode={htmlCode}
            setHtmlCode={setHtmlCode}
            cssCode={cssCode}
            setCssCode={setCssCode}
            jsCode={jsCode}
            setJsCode={setJsCode}
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <LivePreview htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
        </div>
      </div>
      <div className="h-1/3 p-2">
        <AiChat
          htmlCode={htmlCode}
          setHtmlCode={setHtmlCode}
          cssCode={cssCode}
          setCssCode={setCssCode}
          jsCode={jsCode}
          setJsCode={setJsCode}
        />
      </div>
    </div>
  );
}
