
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface AiChatProps {
  htmlCode: string;
  setHtmlCode: (code: string) => void;
  cssCode: string;
  setCssCode: (code: string) => void;
  jsCode: string;
  setJsCode: (code: string) => void;
}

const AiChat: React.FC<AiChatProps> = ({
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode,
}) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [input, setInput] = useState('');

  const mockAiResponse = (userMessage: string) => {
    // This is a simple mock AI response. In a real application, you'd integrate with an AI service.
    return `I've analyzed your request: "${userMessage}". Here's a suggestion to improve your code:

    // HTML
    <div class="container">
      <h1>Welcome to my website</h1>
      <p>This is a paragraph.</p>
    </div>

    // CSS
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    // JavaScript
    document.addEventListener('DOMContentLoaded', () => {
      console.log('Page loaded!');
    });

    Feel free to ask if you need any clarification or have more questions!`;
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { role: 'user' as const, content: input };
      setMessages([...messages, userMessage]);
      setInput('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = { role: 'ai' as const, content: mockAiResponse(input) };
        setMessages(prevMessages => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full border border-gray-300 rounded">
      <h3 className="text-lg font-semibold p-2 border-b">AI Chat</h3>
      <ScrollArea className="flex-grow p-2">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.role === 'ai' ? 'text-blue-600' : 'text-green-600'}`}>
            <strong>{message.role === 'ai' ? 'AI: ' : 'You: '}</strong>
            <pre className="whitespace-pre-wrap">{message.content}</pre>
          </div>
        ))}
      </ScrollArea>
      <div className="p-2 border-t flex">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI for help..."
          className="flex-grow mr-2"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default AiChat;
