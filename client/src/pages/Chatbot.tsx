import React, { useState, useRef, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  TextField, 
  Button,
  Grid,
  Avatar,
  Chip,
  Divider,
  CircularProgress
} from '@mui/material';
import { Send as SendIcon, SmartToy as BotIcon, Person as PersonIcon } from '@mui/icons-material';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI Career Assistant. How can I help you today? I can provide career advice, resume feedback, or help with interview preparation.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample quick prompts
  const quickPrompts = [
    'How can I improve my resume?',
    'What skills should I develop for a career in data science?',
    'Tips for interview preparation',
    'Help me create a career development plan'
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (text: string = newMessage) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    try {
      // This would connect to the actual API in a real implementation
      // const response = await axios.post('/api/chatbot/message', { message: text });
      // const botResponse = response.data.response;
      
      // Simulate AI response with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Sample responses based on user input
      let botResponse = '';
      
      if (text.toLowerCase().includes('resume')) {
        botResponse = 'To improve your resume, make sure to quantify your achievements, tailor it to each job description, and highlight relevant skills. Would you like me to analyze your resume and provide specific feedback?';
      } else if (text.toLowerCase().includes('interview')) {
        botResponse = 'For interview preparation, research the company, prepare stories that demonstrate your skills, practice common questions, and prepare thoughtful questions to ask the interviewer. Would you like to do a mock interview for a specific role?';
      } else if (text.toLowerCase().includes('data science')) {
        botResponse = 'For a career in data science, focus on developing skills in Python, R, SQL, statistics, machine learning, and data visualization. Consider taking courses on platforms like Coursera or edX. Would you like specific course recommendations?';
      } else if (text.toLowerCase().includes('career') && text.toLowerCase().includes('plan')) {
        botResponse = 'A good career development plan includes: 1) Assessing your current skills and interests, 2) Setting short and long-term goals, 3) Identifying skill gaps, 4) Creating an action plan for learning, and 5) Regular reviews and adjustments. Would you like help creating your plan?';
      } else {
        botResponse = 'Thank you for your question. I can help with resume feedback, career planning, skill development, and interview preparation. Could you provide more details about what you\'re looking for?';
      }
      
      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again later.',
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

