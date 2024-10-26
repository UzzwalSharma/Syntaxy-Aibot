import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import "/src/components/Chatbotmain.css";
import Sidebar from "/src/components/Sidebar";
import Spinner from "/src/components/Spinner"; // Import your Spinner component

const Chatbotmain = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);

    setMessages((prev) => [...prev, { sender: 'user', text: prompt }]);

    try {
      const res = await fetch('https://botbackend-nie9.onrender.com/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { sender: 'ai', text: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: 'ai', text: 'Error fetching response. Please try again.' },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Error communicating with the server.' },
      ]);
    } finally {
      setPrompt('');
      setLoading(false);
    }
  };

  useEffect(() => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen p-4">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hello, I am Syntaxy trained by Ujjwal I am, Here to Help You!
      </motion.h1>

      <div className="mt-10">
        {!isOpen && (
          <button
            onClick={toggleForm}
            className="btn bg-blue-500 text-white rounded-md font-bold p-3 hover:bg-blue-600 transition-all"
          >
            {isOpen ? 'Collapse Form' : 'Click here to chat with me'}
          </button>
        )}
      </div>

      <motion.div
        ref={chatContainerRef}
        className="chat-container bg-white w-full max-w-lg p-4 rounded-lg shadow-md overflow-y-auto flex-1 mt-6 transition-all duration-300"
        style={{ maxHeight: '60vh' }}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      >
        <h2 className="chat-heading text-lg sm:text-xl font-bold text-center text-blue-600 mb-4">
          Chat with Syntaxy
        </h2>
        <div className="flex flex-col">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
              initial={{ opacity: 0, x: msg.sender === 'user' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className={`p-3 rounded-lg max-w-xs text-sm ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white text-right rounded-br-none'
                    : 'bg-gray-300 text-gray-900 text-left rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <Spinner /> {/* Use the imported Spinner component */}
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md mt-4"
        style={{ overflow: 'hidden' }}
      >
        <form className="relative w-full mt-4" onSubmit={handleSubmit}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask me anything..."
            required
            className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 pr-12 placeholder:text-lg placeholder-gray-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="absolute right-4 bottom-8 p-2 transition hover:bg-slate-200 rounded-full"
            style={{ pointerEvents: loading ? 'none' : 'auto' }}
          >
            <img src="/send_8021139.png" style={{ height: "45px", marginBottom: "10px" }} alt="Send" />
          </button>
        </form>
      </motion.div>
      <motion.footer 
    className="mt-8 text-center text-gray-400 text-sm"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
>
    Made with <motion.span 
      className="text-red-500" 
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
    >
      ❤️
    </motion.span> by Ujjwal
</motion.footer>
    </div>
  );
};

export default Chatbotmain;
