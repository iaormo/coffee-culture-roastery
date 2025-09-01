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

  // Mock knowledge base for coffee-related questions
  const knowledgeBase = {
    'coffee types': 'We offer various coffee types including 100% Arabica (Unleashed, Black Magic), Robusta blends (Negros Blend), and specialty roasts. Each has unique flavor profiles from sweet caramel to bold chocolate notes.',
    'roasting process': 'Our master roasters use small-batch roasting techniques to ensure maximum freshness. We roast daily and carefully monitor temperature and time for each bean variety to bring out the best flavors.',
    'shipping': 'We ship fresh roasted coffee throughout the Philippines. Orders are typically processed within 1-2 business days and delivered to your doorstep.',
    'subscription': 'Yes! We offer flexible subscription plans with weekly, bi-weekly, or monthly deliveries. You can customize your selection and pause anytime.',
    'roastery visit': 'Absolutely! We offer roastery tours by appointment Tuesday - Saturday, 10:00 AM - 4:00 PM. You\'ll see our roasting process and enjoy tastings.',
    'coffee origins': 'We source our beans directly from Philippine farmers, particularly from Negros Occidental. We work with local farmers to ensure ethical sourcing and sustainable practices.',
    'brewing tips': 'For best results, use freshly ground beans, filtered water at 195-205°F, and the right grind size for your brewing method. We can provide specific recommendations for each blend.',
    'decaf': 'Yes, we offer Decaf Delight - 100% Arabica that\'s Swiss water processed for purity. All the flavor without the caffeine!',
    'return policy': 'We stand behind our coffee quality. If you\'re not satisfied, contact us within 7 days for a full refund or replacement.',
    'contact': 'You can reach us at hello@coffeeculture.ph or call +63 123 456 7890. We\'re located in Bacolod City, Negros Occidental.',
    'hours': 'We\'re open Monday - Friday: 6:00 AM - 9:00 PM, Saturday - Sunday: 7:00 AM - 10:00 PM.',
    'location': 'We\'re located in Bacolod City, Negros Occidental, Philippines. Our roastery is open for tours by appointment.',
    'payment': 'We accept all major credit cards, digital wallets, and bank transfers. Payment is processed securely at checkout.',
    'gift cards': 'Yes! We offer gift cards that make perfect presents for coffee lovers. They can be used for any of our products and services.',
    'wholesale': 'We do offer wholesale pricing for cafes, restaurants, and businesses. Contact us at orders@coffeeculture.ph for wholesale inquiries.',
    'sustainability': 'We\'re committed to sustainability through direct farmer partnerships, eco-friendly packaging, and waste reduction in our roasting process.',
    'flavor profiles': 'Our coffees range from light and floral (Morning Glory) to bold and robust (Black Magic). Each blend has detailed tasting notes on our website.',
    'grinding': 'We recommend grinding beans just before brewing for maximum freshness. We can grind to your preferred size or you can grind at home.',
    'storage': 'Store coffee in an airtight container in a cool, dark place. Avoid refrigeration as it can cause condensation and affect flavor.',
    'espresso': 'Our Espresso Supreme blend is crafted specifically for espresso lovers with rich crema and intense flavor. Perfect for both straight shots and milk drinks.'
  };

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
          text: "Hello! I'm your Coffee Culture assistant. I can help you learn about our coffee, services, and answer any questions you might have. How can I help you today?",
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

  const findAnswer = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Check for exact matches first
    for (const [key, answer] of Object.entries(knowledgeBase)) {
      if (lowerQuestion.includes(key)) {
        return answer;
      }
    }
    
    // Check for partial matches
    if (lowerQuestion.includes('coffee') || lowerQuestion.includes('beans')) {
      return 'We offer premium coffee beans from local Philippine farmers, including Arabica, Robusta, and specialty blends. Each is carefully roasted to bring out unique flavor profiles.';
    }
    
    if (lowerQuestion.includes('price') || lowerQuestion.includes('cost')) {
      return 'Our coffee prices range from ₱420 to ₱520 depending on the blend and size. We offer competitive pricing for premium quality coffee.';
    }
    
    if (lowerQuestion.includes('delivery') || lowerQuestion.includes('shipping')) {
      return 'We offer nationwide shipping throughout the Philippines. Delivery typically takes 1-2 business days after processing.';
    }
    
    if (lowerQuestion.includes('fresh') || lowerQuestion.includes('roasted')) {
      return 'We roast our coffee in small batches daily to ensure maximum freshness. Each bag is stamped with the roast date so you know exactly when it was made.';
    }
    
    // Default response
    return "I'm not sure about that specific question, but I'd be happy to help you with information about our coffee, roasting process, shipping, or visiting our roastery. Feel free to ask something else!";
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

    // Simulate typing delay
    setTimeout(() => {
      const answer = findAnswer(inputMessage);
      const botMessage = {
        id: Date.now() + 1,
        text: answer,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
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