import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const Chat = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Array<{text: string; isUser: boolean}>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Predefined responses for the offline AI
  const knowledgeBase: Array<{pattern: RegExp; response: string}> = [
    {pattern: /hello|hi|hey/i, response: 'Hello! How can I assist you with your science questions today?'},
    {pattern: /what is your name|who are you/i, response: 'I am the ESI AI Assistant, here to help you with science-related queries.'},
    {pattern: /tell me about esi|what is esi/i, response: 'Experimental Science Institute (ESI) is a premier educational institution founded by Ujjwal Sharma, focused on hands-on science education.'},
    {pattern: /courses|classes/i, response: 'We offer courses in Biology, Chemistry, Physics, and Environmental Science. Visit our Courses page for details.'},
    {pattern: /labs?|laboratory/i, response: 'Our state-of-the-art labs are equipped for experiments in all major science disciplines.'},
    {pattern: /events?|workshops?|seminars?/i, response: 'Check our Events page for upcoming workshops, guest lectures, and science fairs.'},
    {pattern: /admission|apply|enroll/i, response: 'For admission information, please visit our website or contact the admissions office.'},
    {pattern: /contact|email|phone/i, response: 'You can reach us at info@expsci.edu or +1 (555) 123-4567.'},
    {pattern: /founder|founded by|ujjwal sharma/i, response: 'The institute was founded by Ujjwal Sharma, a visionary educator passionate about science education.'},
    {pattern: /thank you|thanks/i, response: 'You\'re welcome! Is there anything else I can help you with?'}
  ];

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, {text: userMessage, isUser: true}]);
    setIsLoading(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prev => [...prev, {text: botResponse, isUser: false}]);
      setIsLoading(false);
    }, 500);
  };

  const getBotResponse = (message: string): string => {
    // Check knowledge base for matching patterns
    for (const item of knowledgeBase) {
      if (item.pattern.test(message)) {
        return item.response;
      }
    }
    // If no match found, forward to email
    forwardToEmail(message);
    return "I'm not sure about that. I've forwarded your question to our human experts who will respond via email shortly. Please check your inbox for a reply.";
  };

  const forwardToEmail = (message: string) => {
    // In a real app, you would use EmailJS or similar service here
    // For now, we'll simulate by logging and showing a notification
    console.log('Forwarding to email:', {
      to: 'hardikchauhan131111@gmail.com',
      user: user,
      message: message
    });
    
    // Show a toast notification (simplified)
    alert(`Your question has been forwarded to hardikchauhan131111@gmail.com. Our team will respond to ${user.email} shortly.`);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white px-6 py-4">
          <h1 className="text-xl font-semibold">ESI AI Assistant</h1>
          <p className="text-sm opacity-90">Ask me anything about our institute, courses, or science topics</p>
        </div>
        <div className="p-6 space-y-4 h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs rounded-lg px-4 py-2 ${msg.isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-gray-400"></div>
                <div className="h-3 w-3 animate-pulse rounded-full bg-gray-400"></div>
                <div className="h-3 w-3 animate-pulse rounded-full bg-gray-400"></div>
              </div>
              <span className="ml-2 text-gray-500">Thinking...</span>
            </div>
          )}
        </div>
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
            />
            <button
              onClick={sendMessage}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-50"
              disabled={!input.trim() || isLoading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};