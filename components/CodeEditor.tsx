
"use client";

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

interface CodeEditorProps {
  htmlCode: string;
  setHtmlCode: (code: string) => void;
  cssCode: string;
  setCssCode: (code: string) => void;
  jsCode: string;
  setJsCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 mb-2">
        <h3 className="text-lg font-semibold mb-1">HTML</h3>
        <CodeMirror
          value={htmlCode}
          height="100%"
          extensions={[html()]}
          onChange={(value) => setHtmlCode(value)}
          className="border border-gray-300 rounded"
        />
      </div>
      <div className="flex-1 mb-2">
        <h3 className="text-lg font-semibold mb-1">CSS</h3>
        <CodeMirror
          value={cssCode}
          height="100%"
          extensions={[css()]}
          onChange={(value) => setCssCode(value)}
          className="border border-gray-300 rounded"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1">JavaScript</h3>
        <CodeMirror
          value={jsCode}
          height="100%"
          extensions={[javascript()]}
          onChange={(value) => setJsCode(value)}
          className="border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
