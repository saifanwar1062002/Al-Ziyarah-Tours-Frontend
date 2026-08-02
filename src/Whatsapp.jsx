import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const Whatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(false);

  const whatsappNumber = "+919136397091";
  
  const quickReplies = [
    { icon: "🕋", text: "Umrah Packages", message: "I'd like to know about Umrah packages" },
    { icon: "✈️", text: "Hajj Services", message: "Tell me about Hajj services" },
    { icon: "🏨", text: "Hotel Options", message: "What hotel options do you offer?" },
    { icon: "💰", text: "Pricing", message: "What are your package prices?" },
    { icon: "📞", text: "Contact Agent", message: "I need to speak with an agent" }
  ];

  const welcomeMessages = [
    {
      id: 1,
      text: "السلام عليكم ورحمة الله وبركاته",
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isBot: true
    },
    {
      id: 2,
      text: "Welcome to Al-Ziyarah Tours! 🌙",
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isBot: true
    },
    {
      id: 3,
      text: "Your trusted companion for sacred journeys. How may we assist you?",
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isBot: true
    }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      
      welcomeMessages.forEach((message, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, message]);
          if (index === welcomeMessages.length - 1) {
            setIsTyping(false);
            setTimeout(() => setShowQuickReplies(true), 500);
          }
        }, (index + 1) * 1000);
      });
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleQuickReply = (reply) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(reply.message)}`;
    window.open(url, '_blank');
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inputText)}`;
      window.open(url, '_blank');
      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .message-animate {
          animation: slideUp 0.2s ease-out;
        }

        .bounce-btn {
          animation: bounce 2s infinite;
        }

        .pulse-ring-animation {
          animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #0D9488 0%, #059669 100%);
        }

        .chat-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .chat-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 8px;
        }

        .chat-scrollbar::-webkit-scrollbar-thumb {
          background: #0D9488;
          border-radius: 8px;
        }
      `}</style>

      <div className="fixed bottom-4 right-4 z-50 font-sans sm:bottom-6 sm:right-6">
        {/* Chat Window - Reduced Size */}
        <div className={`
          absolute bottom-16 right-0 w-80 sm:w-84 bg-white rounded-2xl shadow-xl overflow-hidden
          transition-all duration-300 ease-out transform origin-bottom-right
          ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-6 pointer-events-none'}
        `}>
          {/* Compact Header */}
           <div className="gradient-bg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                {/* Replace with your logo */}
                <img
                  src="/Fav icon-logo.png"
                  alt="Logo"
                  className="w-8 h-8 object-cover rounded-full"
                />
              </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-white">
                  <h1 className="font-bold text-sm sm:text-base">Al-Ziyarah Tours</h1>
                  <div className="flex items-center space-x-1 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></div>
                    <p className="text-xs text-teal-50">Online • Ready to help</p>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:bg-white/20 rounded-full p-1.5 transition-all duration-200"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Compact Messages Area */}
          <div className="h-72 overflow-y-auto p-3 bg-gradient-to-b from-gray-50 to-white chat-scrollbar">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message-animate flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center mr-2 shadow-sm">
                      <span className="text-white text-xs">🕋</span>
                    </div>
                  )}
                  <div className={`max-w-[70%] ${message.isBot ? '' : 'order-1'}`}>
                    <div className={`
                      px-3 py-2 rounded-xl text-sm shadow-sm
                      ${message.isBot 
                        ? 'bg-white text-gray-800 rounded-tl-none border border-gray-100' 
                        : 'gradient-bg text-white rounded-tr-none'
                      }
                    `}>
                      <p className="leading-relaxed">{message.text}</p>
                    </div>
                    <p className={`text-xs mt-1 px-1 ${message.isBot ? 'text-gray-500' : 'text-gray-600 text-right'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center space-x-2 message-animate">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs">🕋</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl rounded-tl-none shadow-sm border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Compact Quick Replies */}
              {showQuickReplies && !isTyping && (
                <div className="space-y-2 message-animate">
                  <p className="text-xs text-gray-500 font-semibold px-1">Quick Actions:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="flex items-center space-x-1.5 p-2 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-500 rounded-lg transition-all duration-200 group shadow-xs hover:shadow-sm text-xs"
                      >
                        <span className="text-sm">{reply.icon}</span>
                        <span className="font-medium text-gray-700 group-hover:text-teal-700 truncate">{reply.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Compact Input Area */}
          <div className="border-t border-gray-200 p-3 bg-white text-black">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm placeholder:text-xs"
              />
              <button
                onClick={handleSendMessage}
                className="gradient-bg text-white p-2 rounded-full hover:shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-xs text-center text-gray-500 mt-2 flex justify-center">
              Click send to continue on WhatsApp
            </p>
          </div>
        </div>

        {/* Floating Button */}
        <button
          onClick={toggleChat}
          className={`
            relative w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-lg
            flex items-center justify-center transition-all duration-300 transform
            hover:scale-110 active:scale-95 group
            ${!isOpen ? 'bounce-btn' : ''}
          `}
        >
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 pulse-ring-animation"></div>
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 pulse-ring-animation" style={{ animationDelay: '1s' }}></div>
          
          {/* Icon */}
          <div className="relative z-10">
            {isOpen ? (
              <X size={20} className="sm:w-6 sm:h-6 transition-transform duration-300" />
            ) : (
              <svg 
                viewBox="0 0 32 32" 
                className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110"
                fill="white"
              >
                <path d="M16.002 3.667c-6.827 0-12.373 5.546-12.373 12.373 0 2.146.553 4.16 1.52 5.92l-1.613 5.893 6.04-1.587c1.693.92 3.627 1.44 5.693 1.44h.004c6.827 0 12.373-5.546 12.373-12.373s-5.546-12.373-12.373-12.373zm7.253 17.627c-.307.867-1.813 1.587-2.493 1.693-.68.107-1.293.16-2.08-.133-.48-.173-1.093-.4-1.88-.787-3.293-1.613-5.44-4.973-5.6-5.2-.16-.227-1.307-1.747-1.307-3.333 0-1.587.827-2.373 1.12-2.693.293-.32.64-.4.853-.4s.427.007.613.013c.2.007.467-.08.733.56.267.64 1.013 2.493 1.107 2.68.093.187.16.4.027.627-.133.227-.2.373-.36.573-.16.2-.333.453-.48.6-.16.16-.32.333-.133.653.187.32.827 1.373 1.773 2.227 1.213 1.093 2.24 1.44 2.56 1.6.32.16.507.133.693-.08.187-.213.8-.933 1.013-1.253.213-.32.427-.267.72-.16.293.107 1.867.88 2.187 1.04.32.16.533.24.613.373.08.133.08.76-.227 1.627z" />
              </svg>
            )}
          </div>

          {/* Notification Badge */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md animate-pulse">
              1
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default Whatsapp;