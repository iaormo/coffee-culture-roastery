import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Coffee, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Gemini API configuration
  const GEMINI_API_KEY = 'AIzaSyBOWJ6-ANkHipd28QP-7qm9SS7tBhPVyKo';
  const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  // Coffee Culture AI Assistant context
  const coffeeContext = `
    You are the Coffee Culture Roastery AI Assistant, a helpful and knowledgeable virtual assistant for Coffee Culture Roastery in Bacolod City, Philippines.
    
    IMPORTANT: You are NOT Thomas. You are an AI assistant that helps customers with information about Coffee Culture Roastery.
    
    About Coffee Culture Roastery:
    - Located in Bacolod City, Negros Occidental, Philippines
    - Founded with a farm-to-cup philosophy
    - Direct partnerships with local Philippine farmers
    - Small-batch roasting for maximum freshness
    - Open Monday-Friday 6AM-9PM, Saturday-Sunday 7AM-10PM
    - Contact: hello@coffeeculture.ph, +63 123 456 7890, +63 987 654 3210
    - Orders: orders@coffeeculture.ph
    
    Our Coffee Blends (with exact prices):
    - Unleashed (100% Arabica): ₱450 - Balanced medium-body, sweet caramel, milk chocolate notes
    - Black Magic (100% Arabica): ₱480 - Full-body, low-acidity, dark chocolate, roasted nuts
    - Negros Blend (80% Robusta, 20% Arabica): ₱420 - Bold and robust, chocolate, nuts, stone fruit
    - Decaf Delight (100% Arabica): Swiss water processed, all flavor without caffeine
    
    Services:
    - Nationwide shipping throughout Philippines (1-2 business days processing)
    - Roastery tours by appointment (Tuesday-Saturday, 10AM-4PM)
    - Subscription plans available (weekly, bi-weekly, monthly)
    - Wholesale for businesses (contact orders@coffeeculture.ph)
    - Gift cards available
    
    Business Information:
    - Return policy: 7 days satisfaction guarantee
    - Payment: All major credit cards, digital wallets, bank transfers
    - Sustainability: Eco-friendly packaging, waste reduction, ethical sourcing
    - Master roasters: Certified Q Arabica & Robusta graders
    
    Your personality: Be helpful, professional, and friendly. Provide accurate information based on the website content. 
    Keep responses concise (2-3 sentences max) but informative. Always mention that you're the Coffee Culture AI Assistant.
    If you don't know something specific, direct them to contact hello@coffeeculture.ph or call +63 123 456 7890.
  `;

  // Common questions to suggest
  const suggestedQuestions = [
    'What coffee types do you offer?',
    'How does your roasting process work?',
    'Do you ship nationwide?',
    'Can I visit the roastery?',
    'What are your business hours?',
    'Do you offer subscriptions?'
  ];

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: "Hello! I'm your Coffee Culture AI Assistant. I can help you learn about our coffee blends, services, and answer any questions about Coffee Culture Roastery. How can I assist you today? ☕",
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const generateResponse = async (userMessage) => {
    try {
      console.log('Generating response for:', userMessage);
      
      const prompt = `${coffeeContext}\n\nCustomer: ${userMessage}\n\nCoffee Culture AI Assistant (respond as the AI assistant):`;
      
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.5,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 120,
          }
        })
      });

      console.log('API Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error response:', errorText);
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
        const responseText = data.candidates[0].content.parts[0].text.trim();
        console.log('Generated response:', responseText);
        return responseText;
      } else {
        console.error('Invalid response structure:', data);
        throw new Error('Invalid response format from Gemini API');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      
      // Provide specific responses based on common questions
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('coffee') || lowerMessage.includes('blend') || lowerMessage.includes('type')) {
        return "We offer several coffee blends: Unleashed (₱450 - 100% Arabica with caramel notes), Black Magic (₱480 - full-bodied Arabica), and Negros Blend (₱420 - 80% Robusta, 20% Arabica). Each is carefully roasted for maximum flavor!";
      }
      
      if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        return "Our coffee prices range from ₱420 to ₱480. Unleashed is ₱450, Black Magic is ₱480, and Negros Blend is ₱420. All prices include our premium small-batch roasting process.";
      }
      
      if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
        return "We ship nationwide throughout the Philippines! Orders are processed within 1-2 business days and delivered to your doorstep. Contact us at hello@coffeeculture.ph for specific delivery questions.";
      }
      
      if (lowerMessage.includes('visit') || lowerMessage.includes('roastery') || lowerMessage.includes('tour')) {
        return "Absolutely! We offer roastery tours by appointment Tuesday-Saturday, 10AM-4PM. You'll see our roasting process and enjoy tastings. Contact us to schedule your visit!";
      }
      
      if (lowerMessage.includes('hour') || lowerMessage.includes('open')) {
        return "We're open Monday-Friday 6AM-9PM and Saturday-Sunday 7AM-10PM. Our roastery tours are available Tuesday-Saturday, 10AM-4PM by appointment.";
      }
      
      if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
        return "You can reach us at hello@coffeeculture.ph or call +63 123 456 7890 / +63 987 654 3210. We're located in Bacolod City, Negros Occidental, Philippines.";
      }
      
      // Generic fallback
      return "I'm here to help with information about Coffee Culture Roastery! Ask me about our coffee blends, prices, shipping, roastery visits, or contact details. For immediate assistance, call +63 123 456 7890.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await generateResponse(inputMessage);
      
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry! My system is having issues. For immediate assistance, please contact us at hello@coffeeculture.ph or call +63 123 456 7890. ☕",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-passion-red hover:bg-red-700 text-white rounded-full w-16 h-16 shadow-lg hover:scale-110 transition-all duration-200"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-passion-red to-orange-roast text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Coffee className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-knewave text-lg">Coffee Culture</h3>
            <p className="font-glacial text-xs opacity-90">AI Assistant</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20 p-2 h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-passion-red text-white'
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              <p className="font-glacial text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="px-4 pb-3">
          <p className="font-glacial text-xs text-gray-500 mb-2">Try asking about:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.slice(0, 3).map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleSuggestedQuestion(question)}
                className="text-xs h-7 px-2 border-gray-300 text-gray-600 hover:bg-passion-red hover:text-white hover:border-passion-red"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about our coffee..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-passion-red focus:border-transparent font-glacial text-sm"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="bg-passion-red hover:bg-red-700 text-white px-3 py-2 rounded-lg disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot; 